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
    const params = useParams();
    this.newSection.topicId = courseStore.activeTopicId;
    this.newSection.postId = params.Id;
    this.newSection.sectionType = editingCourseStore.newSectionType;
    this.newSection.title = editingCourseStore.editingSection.title;
    this.newSection.subTitle = editingCourseStore.editingSection.subTitle;
    this.newSection.order = editingCourseStore.editingSection.order;
    await AddNewSection(this.newSection);
    editingCourseStore.newSectionStage = undefined;
    editingCourseStore.newSectionType = undefined;
    editingCourseStore.editing = false;
  }
}

export const sectionStore = new SectionsStore();
