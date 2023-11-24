import { ISection } from "../models/section.model";
import { courseStore } from "../store/courseStore";
import { sectionStore } from "../store/sectionStore";
import { ApiAuthDelete, ApiAuthPost, ApiAuthPut } from "./ApiService";

function updateCourseSection(sections:ISection[]) {
  if (sectionStore.newSection.topicId) {
    courseStore.course.lectures.find(x => x.id === courseStore.activeLectureId)!.topics.find(x => x.id === courseStore.activeTopicId)!.sections = OrderSections(sections);
  }}

export function GetAllSections() {
  return OrderSections(sectionStore.sections);
}

export function OrderSections(sections: ISection[]) {
  sections = sections.sort((n1, n2) => {
    if (n1.order == null ||n1.order > (n2.order ?? Infinity)) {
      return 1;
    }
    return -1;
  });
  return sections;
}

export async function editSection(section: ISection){
  await ApiAuthPut("Section/EditSection",section).then((response)=>{
    sectionStore.sections = OrderSections(response.data);
    updateCourseSection(response.data);
  });
}


export async function AddNewSection(section:ISection) {
  await ApiAuthPost("Section/AddNewSection",section).then((response) =>{
    sectionStore.sections = OrderSections(response.data);
    updateCourseSection(response.data);
  })
}

export async function deleteSectionById(id: number) {
  await ApiAuthDelete(`Section/DeleteSection?sectionId=${id}`, "").then((response) => {
    sectionStore.sections = OrderSections(response.data);
    updateCourseSection(response.data);
  });
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
