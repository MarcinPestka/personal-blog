import { makeAutoObservable } from "mobx";
import { ILecture, ITopic } from "../models/course.model";
import { ISection } from "../models/section.model";
import { SectionAddStage, SectionTypeEnum } from "../services/SectionService";

export class EditingCourseStore {
  newSectionType: SectionTypeEnum | undefined;
  newSectionStage: SectionAddStage | undefined;
  editing: boolean = false;
  editingSection: ISection = {} as ISection;
  editPage: boolean = false;
  sectionPreview: boolean = false;

  elementDrag: boolean = false;
  elementDragSection: ISection = {} as ISection;
  elementDragId: number = 1;
  initialDragOrder: number = 0;

  editingTopic: boolean = false;
  newTopic: ITopic = {title: ""} as ITopic;
  newLecture: ILecture = {title: ""} as ILecture;
  
  dragging: boolean = false;
  dragTopic: ITopic = {} as ITopic;
  dragLecture: ILecture = {} as ILecture;

  dragElement: ITopic | ILecture | ISection = {} as ITopic;

  editingLecture: boolean = false;


  constructor() {
    makeAutoObservable(this);
    }
}

export const editingCourseStore = new EditingCourseStore();
