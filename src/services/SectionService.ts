import { useParams } from "react-router-dom";
import tempImg from "../image/img.png";

export function GetAllSections() {
  var test = useParams();
  var sections = SectionsRepository.filter((x) => x.postId === Number(test.id));
  sections = sections.sort((n1, n2) => {
    if (n1.order == null || n1.order > (n2.order ?? Infinity)) {
      return 1;
    }
    return -1;
  });
  return sections;
}

export interface Section {
  Id: number;
  postId: number;
  Name: string;
  Header?: string;
  SubHeader?: string;
  Text: string;
  img?: string;
  order: number;
  type: number;
}

export var SectionsRepository: Section[] = [
  {
    Id: 1,
    postId: 1,
    Name: "test",
    Header: "Zacznij naukę z tell code 1.1",
    SubHeader: "Programownie jeszcze nigdy nie było tak proste!",
    Text: "Dołącz do setek osób które uczą się programowania z nasza pomocą:)",
    img: tempImg,
    order: 1,
    type: 1,
  },
  {
    Id: 2,
    postId: 1,
    Name: "test2",
    Header: "Header o id 1.2",
    SubHeader: "Programownie jeszcze nigdy nie było tak proste!",
    Text: "Dołącz do setek osób które uczą się programowania z nasza pomocą:)",
    img: tempImg,
    order: 2,
    type: 1,
  },
  {
    Id: 2,
    postId: 2,
    Name: "test2",
    Header: "Header o id postu 2.1",
    SubHeader: "Programownie jeszcze nigdy nie było tak proste!",
    Text: "Dołącz do setek osób które uczą się programowania z nasza pomocą:)",
    img: tempImg,
    order: 1,
    type: 1,
  },
  {
    Id: 2,
    postId: 2,
    Name: "test2",
    Header: "Header o id postu 2.2",
    SubHeader: "Programownie jeszcze nigdy nie było tak proste!",
    Text: "Dołącz do setek osób które uczą się programowania z nasza pomocą:)",
    img: tempImg,
    order: 2,
    type: 1,
  },
  {
    Id: 2,
    postId: 2,
    Name: "test2",
    Header: "Header o id postu 2.2",
    SubHeader: "Programownie jeszcze nigdy nie było tak proste!",
    Text: "Dołącz do setek osób które uczą się programowania z nasza pomocą:)",
    img: tempImg,
    order: 2,
    type: 2,
  },
];
