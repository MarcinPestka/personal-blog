import { makeAutoObservable, runInAction } from "mobx";
import { ISection } from "../models/section.model";
import { editingCourseStore } from "./editingCourseStore";
import { courseStore } from "./courseStore";
import { AddNewSection } from "../services/SectionService";
import { useParams } from "react-router-dom";

export class SectionsStore {
  sections: ISection[] = [];
  newSection: ISection = {} as ISection;

  constructor() {
    makeAutoObservable(this);
  }

  AddNewSection = async () => {
    //this.newSection.topicId = courseStore.activeTopicId;
    //this.newSection.postId = 1;
    await AddNewSection(this.newSection);
    editingCourseStore.newSectionStage = undefined;
    editingCourseStore.newSectionType = undefined;
    editingCourseStore.editing = false;
  }
}

export const sectionStore = new SectionsStore();
