
export interface IExam{
  id: number;
  title:string;
  description:string;
  authorId:number;
  lectureId:number;
  questions: IQuestion[];
}

export interface IQuestion{
    id: number;
    questionText:string;
    description:string;
    answears: IAnswear[];
}

export interface IAnswear{
    id: number;
    answearText:string;
    description:string;
}