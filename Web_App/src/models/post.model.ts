import { IUser } from "./User.model";
import { ISection } from "./section.model";

export interface IPost {
    id: number;
    publishDate:Date;
    title: string;
    description?: string;
    authorId?: number;
    img?: string;
    sections: ISection[];
}