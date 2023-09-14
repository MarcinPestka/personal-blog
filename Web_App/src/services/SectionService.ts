import { ISection } from "../models/section.model";
import { sectionStore } from "../store/sectionStore";
import { ApiAuthDelete, ApiAuthPost, ApiAuthPut } from "./ApiService";
import { editingCourseStore } from "../store/editingCourseStore";

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

export async function editSection(){
  await ApiAuthPut("Section/EditSection",editingCourseStore.dragElement).then((response)=>{
    sectionStore.sections = OrderSections(response.data);
  });
}


export async function AddNewSection(section:ISection) {
  await ApiAuthPost("Section/AddNewSection",section).then((response) =>{
    sectionStore.sections = OrderSections(response.data);
  })
}

export async function deleteSectionById(id: number) {
  await ApiAuthDelete(`Section/DeleteSection?sectionId=${id}`, "").then((response) => {
    sectionStore.sections = OrderSections(response.data);
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
