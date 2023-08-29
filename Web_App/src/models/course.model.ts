import { ISection } from "./section.model";

export interface ICourse {
  id: number;
  title: string;
  description?: string;
  authorId?: number;
  lectures: ILecture[];
}

export interface ILecture {
  id: number;
  title: string;
  content: string;
  description?: string;
  lectureOrder?:number;
  CourseId: number;
  topics: ITopic[];
}

export interface ITopic {
  id: number;
  title: string;
  lectureId: number;
  topicOrder?:number;
  completed?: boolean;
  sections: ISection[];
}
