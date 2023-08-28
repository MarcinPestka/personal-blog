import { action, makeAutoObservable, makeObservable, observable, runInAction } from "mobx";
import axios from "axios";
import { IPost } from "../models/post.model";
import { ICourse, ITopic } from "../models/course.model";
import { ISection } from "../models/section.model";
import { ApiAuthDelete, ApiAuthPost, ApiGet, ApiGetAuth } from "../services/ApiService";
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

  constructor() {
    makeAutoObservable(this);
    }
}

export const editingCourseStore = new EditingCourseStore();
