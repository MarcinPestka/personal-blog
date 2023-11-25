import { IExam } from "./exam.model";
import { ISection } from "./section.model";

export interface ICourse {
  id: number;
  title: string;
  content?:string;
  description?: string;
  authorId?: number;
  lectures: ILecture[];
}

export interface ILecture {
  id: number;
  title: string;
  content: string;
  description?: string;
  order:number;
  CourseId: number;
  topics: ITopic[];
  exam: IExam;
}


export interface ITopic {
  id: number;
  title: string;
  lectureId: number;
  order:number;
  completed?: boolean;
  sections: ISection[];
}

export interface ILastTopic {
  id:number;
  activeCourseId:number;
  userId:number;
  topicId:number;
  lectureId:number;
}