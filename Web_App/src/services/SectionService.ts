import { ISection } from "../models/section.model";
import { sectionStore } from "../store/sectionStore";

export function GetAllSections() {
  return OrderSections(sectionStore.sections);
}

export function OrderSections(sections: ISection[]) {
  sections = sections.sort((n1, n2) => {
    if (n1.sectionOrder == null || n1.sectionOrder > (n2.sectionOrder ?? Infinity)) {
      return 1;
    }
    return -1;
  });
  return sections;
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


