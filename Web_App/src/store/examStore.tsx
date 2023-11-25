import { makeAutoObservable } from "mobx";
import { CheckedAnswears, IExam } from "../models/exam.model";
import { courseStore } from "./courseStore";
import { CheckAnswearsApi } from "../services/ExamService";

export class ExamStore {
  exam: IExam | undefined;
  isExam:boolean = false;
  examAnswears:CheckedAnswears = {examId:7,answearPairs:[]} as CheckedAnswears;


  constructor() {
    makeAutoObservable(this);
  }

  checkAnswears = () => {
    CheckAnswearsApi(this.examAnswears);
  };

  StartExam = () => {
    this.exam = courseStore.course.lectures.find(x=>x.id === courseStore.activeLectureId)?.exam;
    this.isExam = true;
  };

  EndExam = () => {
    this.isExam = false;
  };
}

export const examStore = new ExamStore();
