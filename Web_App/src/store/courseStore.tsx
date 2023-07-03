import { action, makeAutoObservable, makeObservable, observable, runInAction } from "mobx";
import axios from "axios";
import { IPost } from "../models/post.model";
import { ICourse } from "../models/course.model";
import { ISection } from "../models/section.model";

export class CourseStore {
  courses: ICourse[] = [];
  course!: ICourse;

  lectureId: number = 7;
  topicId: number | undefined;
  activeSections: ISection[] | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  setTopicNumber = (id: number) => {
    this.topicId = id;
  };

  getCourseById = async (Id: string | undefined) => {
    await axios({
      method: "get",
      url: "https://localhost:7143/Course?Id=" + Id,
    }).then((resp) => {
      let course: ICourse = resp.data;
      runInAction(() => {
        this.course = course;
        this.lectureId = course.lectures[0].id;
        this.topicId = course.lectures[0].topics[0].id;
      })
    });
    this.setActiveSections();
  };

  getAllCourses = async () => {
    await axios({
      method: "get",
      url: "https://localhost:7143/Course/GetAllCourses",
    }).then((resp) => {
      let courses: ICourse[] = resp.data;
      runInAction(() => {
        this.courses = courses;
      })
      
    });
  };

  setActiveSections = () => {
    this.activeSections = this.course.lectures
      .find((i) => i.id === this.lectureId)
      ?.topics.find((i) => i.id === this.topicId)?.sections;
  };

  setActiveLectureId = (id: number) => {
    this.lectureId = id;
    this.setActiveSections();
  };

  setActiveTopicId = (id: number | null) => {
    if (id) {
      this.topicId = id;
    } else {
      this.topicId = this.course.lectures.find(
        (i) => i.id === this.lectureId
      )?.topics[0].id;
    }
    this.setActiveSections();
  };
}

export const courseStore = new CourseStore();
