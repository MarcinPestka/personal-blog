import { runInAction } from "mobx";
import { ISection } from "../models/section.model";
import { courseStore } from "../store/courseStore";
import { sectionStore } from "../store/sectionStore";
import { ApiAuthDelete, ApiAuthPost } from "./ApiService";

export function GetAllSections() {
  return OrderSections(sectionStore.sections);
}

export function OrderSections(sections: ISection[]) {
  sections = sections.sort((n1, n2) => {
    if (
      n1.sectionOrder == null ||
      n1.sectionOrder > (n2.sectionOrder ?? Infinity)
    ) {
      return 1;
    }
    return -1;
  });
  return sections;
}

export async function AddNewSection(section:ISection) {
  await ApiAuthPost("Section/AddNewSection",section).then((resp) =>{
    console.log(courseStore.lectureId);
    console.log(courseStore.topicId);
    console.log(resp.data);
    courseStore.course.lectures.find(x => x.id === courseStore.lectureId)!.topics.find(x => x.id === courseStore.topicId)!.sections = resp.data;
    courseStore.setActiveSections();
  })
}

export async function deleteSectionById(id: number) {
  await ApiAuthDelete(`Section/DeleteSection?sectionId=${id}`, "").then(
    (response) => {
      runInAction(() => {
        courseStore.course.lectures
          .find((x) => x.id === courseStore.lectureId)!
          .topics.find((x) => x.id === courseStore.topicId)!.sections =
          response.data;
      });
      courseStore.setActiveSections();
    }
  );
}

export enum SectionTypeEnum {
  Title = 1,
  TextSection,
  TitleNoImage,
  CodeBlockSection,
}

export enum SectionAddStage {
  sectionType = 1,
  sectionContents,
}
