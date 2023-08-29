import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";
import { ICourse } from "../models/course.model";
import { ISection } from "../models/section.model";
import { ApiAuthDelete, ApiAuthPost, ApiGetAuth } from "../services/ApiService";
import { editingCourseStore } from "./editingSectionsStore";
import { OrderSections } from "../services/SectionService";
import { OrderLectures } from "../services/LectureService";
import { OrderTopics } from "../services/TopicService";

export class CourseStore {
  courses: ICourse[] = [];
  course!: ICourse;
  completedTopicId: number[] = [];
  activeCourse: boolean = false;
  activeCourseId: number = 0;

  activeLectureId!: number;
  activeTopicId: number = 0;

  activeSections: ISection[] | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  setTopicNumber = (id: number) => {
    this.activeTopicId = id;
  };

  getCourseById = async (Id: number | undefined) => {
    await axios({
      method: "get",
      url: "https://localhost:7143/Course?Id=" + Id,
    }).then((resp) => {
      let course: ICourse = resp.data;
      runInAction(() => {
        this.course = course;
        this.course.lectures = OrderLectures(this.course.lectures);
        this.course.lectures.forEach((x) => {
          x.topics = OrderTopics(x.topics);
        });

        if (
          !editingCourseStore.editing &&
          course.lectures.length !== 0 &&
          course.lectures[0].topics.length !== 0
        ) {
          //this.lectureId = course.lectures[0].id;
          this.activeTopicId = course.lectures[0].topics[0].id;
        }
      });
    });
    this.setActiveSections();
  };

  getActiveCourseId = async () => {
    ApiGetAuth(
      `Course/GetActiveCourseId?coruseId=${courseStore.course.id}`
    ).then((resp) => {
      runInAction(() => {
        this.activeCourseId = resp.data;
      });
    });
  };

  getAllCourses = async () => {
    await axios({
      method: "get",
      url: "https://localhost:7143/Course/GetAllCourses",
    }).then((resp) => {
      let courses: ICourse[] = resp.data;
      runInAction(() => {
        this.courses = courses;
      });
    });
  };

  GetAllActiveCourses = async () => {
    await ApiGetAuth("Course/GetAllActiveCourses").then((resp) => {
      let courses: ICourse[] = resp.data;
      runInAction(() => {
        this.courses = courses;
      });
    });
  };

  GetCompletedTopics = async (activeCourseId: string | undefined) => {
    await ApiGetAuth(
      `Course/GetCompletedTopicIds?courseId=${activeCourseId}`
    ).then((resp) => {
      let completedTopics: number[] = resp.data;
      runInAction(() => {
        this.completedTopicId = completedTopics;
      });
    });
  };

  HandleTopicCompletion = async (TopicId: number, ActiveCourseId: number) => {
    if (!this.completedTopicId.includes(TopicId)) {
      this.CompleteTopic(TopicId, ActiveCourseId);
    } else {
      this.UnCompletedTopic(TopicId, ActiveCourseId);
    }
  };

  CompleteTopic = async (TopicId: number, ActiveCourseId: number) => {
    this.completedTopicId.push(TopicId);
    await ApiAuthPost("Course/CompleteTopic", { TopicId, ActiveCourseId }).then(
      (resp) => {}
    );
  };

  UnCompletedTopic = async (TopicId: number, ActiveCourseId: number) => {
    var index = this.completedTopicId.indexOf(TopicId);
    this.completedTopicId.splice(index, 1);
    await ApiAuthDelete("Course/UnCompleteTopic", {
      TopicId,
      ActiveCourseId,
    }).then((resp) => {});
  };

  setActiveSections = () => {
    this.activeSections = OrderSections(this.course.lectures.find((i) => i.id === this.activeLectureId)?.topics.find((i) => i.id === this.activeTopicId)?.sections ?? []);
  };

  setActiveLectureId = (id: number) => {
    this.activeLectureId = id;
    this.setActiveTopicId(0);
  };

  setActiveTopicId = (id: number) => {
    if (id) {
      this.activeTopicId = id;
    } else {
      this.activeTopicId = this.course.lectures.find((i) => i.id === this.activeLectureId)?.topics[0]?.id ?? 0;
    }
    this.setActiveSections();
  };
}

export const courseStore = new CourseStore();
