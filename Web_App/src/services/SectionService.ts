import { sectionStore } from "../store/sectionStore";

export function GetAllSections() {
  const store = sectionStore;

  var sections = store.sections;
  sections = sections.sort((n1, n2) => {
    if (n1.order == null || n1.order > (n2.order ?? Infinity)) {
      return 1;
    }
    return -1;
  });
  return sections;
}

export enum SectionTypeEnum {
  title = 1,
  text,
  TitleNoImage,
  Code,
}