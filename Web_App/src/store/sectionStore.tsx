import { makeAutoObservable, runInAction } from "mobx";
import { ISection } from "../models/section.model";
import { editingCourseStore } from "./editingCourseStore";
import { courseStore } from "./courseStore";
import { AddNewSection } from "../services/SectionService";
import { useParams } from "react-router-dom";

export class SectionsStore {
  sections: ISection[] = [];
  newSection: ISection = {} as ISection;
  test: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  AddNewSection = async () => {
    await AddNewSection(this.newSection);
    runInAction(()=>{
      editingCourseStore.newSectionStage = undefined;
      editingCourseStore.newSectionType = undefined;
    })

  }
}

export const sectionStore = new SectionsStore();
