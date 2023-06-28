import { useParams } from "react-router-dom";
import tempImg from "../image/img.png";
import tellCodeLogo from "../image/TellCodeLogo.svg";
import { ISection } from "../models/section.model";
import { getPostById } from "./ApiService";
import { sectionStore } from "../store/sectionStore";
import { ILecture } from "../models/course.model";

export function GetAllSections() {
  const store = sectionStore;
  var test = useParams();

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
}