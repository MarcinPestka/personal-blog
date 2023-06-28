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
    description?: string;
    topics: ITopic[];
} 

export interface ITopic {
    id: number;
    title: string;
    sections: ISection[]
}