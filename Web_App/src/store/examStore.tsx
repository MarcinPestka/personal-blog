import { makeAutoObservable, runInAction } from "mobx";
import { IPost } from "../models/post.model";
import { ApiGet } from "../services/ApiService";
import { SectionsStore, sectionStore } from "./sectionStore";
import { OrderSections } from "../services/SectionService";
import { IExam } from "../models/exam.model";
import { courseStore } from "./courseStore";

export class ExamStore {
  exam: IExam | undefined;
  isExam:boolean = false;


  constructor() {
    makeAutoObservable(this);
  }

  StartExam = () => {
    console.log(courseStore.activeLectureId);
    this.exam = courseStore.course.lectures.find(x=>x.id === courseStore.activeLectureId)?.exam;
    this.isExam = true;
  };

  EndExam = () => {
    this.isExam = false;
  };
}

export const examStore = new ExamStore();
