import { useParams } from "react-router-dom";
import tempImg from "../image/img.png";
import tellCodeLogo from "../image/TellCodeLogo.svg";
import { ISection } from "../models/section.model";
import { getPostById } from "./ApiService";
import { sectionStore } from "../store/sectionStore";
import { ICourse } from "../models/course.model";

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

export var SectionsRepository: ICourse[] = [
  {
    id: 1,
    idk: 4,
    title: "1. Środowisko",
    sections: [
      {
        id: 1,
        title: "Elo",
      },
      {
        id: 2,
        title: "Żelo",
      },
    ],
  },
  {
    id: 2,
    idk: 3,
    title: "2. Zmienne",
    sections: [
      {
        id: 1,
        title: "Test",
      },
      {
        id: 2,
        title: "Mest",
      },
    ],
  },
  {
    id: 5,
    idk: 6,
    title: "3. Test",
    sections: [
      {
        id: 1,
        title: "Best",
      },
      {
        id: 2,
        title: "Srest",
      },
    ],
  },
];
