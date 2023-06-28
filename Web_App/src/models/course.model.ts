export interface ICourse {
    id: number;
    idk: number;
    title: string;
    sections: ISectionCourse[];
}

export interface ISectionCourse {
    id: number;
    title: string;
} 