import { useParams } from "react-router-dom";
import tempImg from "../image/img.png";
import tellCodeLogo from "../image/TellCodeLogo.svg";

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
  Text?: string;
  img?: string;
  order: number;
  type: number;
}

export enum SectionTypeEnum {
  Title = 1,
  Text,
  TitleNoImage
}

export var SectionsRepository: Section[] = [
  {
    Id: 1,
    postId: 1,
    Name: "test",
    Header: "Zacznij naukę z Tell Code",
    SubHeader: "Programownie jeszcze nigdy nie było tak proste!",
    Text: "Dołącz do setek osób które uczą się programowania z nasza pomocą:)",
    img: tellCodeLogo,
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
    Header: "Jak i czemu stworzyłem tego bloga?",
    SubHeader: "Krótki wpis o mojej pasji do programowania!",
    order: 1,
    type: 3,
  },
  {
    Id: 2,
    postId: 2,
    Name: "test2",
    Header: "Header o id postu 2.2",
    SubHeader: "Programownie jeszcze nigdy nie było tak proste!",
    img: tempImg,
    order: 2,
    type: 1,
  },
  {
    Id: 2,
    postId: 2,
    Name: "test2",
    Text: "Od samego początku mojej przygody z programowaniem odczuwałem ogromną pasję do tworzenia i rozwiązywania problemów za pomocą kodu. Jednakże, gdy sam zaczynałem swoją przygodę jako programista, napotykałem wiele trudności i frustracji. Brakowało mi pewnego przewodnika, który mógłby mi wskazać właściwe kroki i udzielić cennych wskazówek.",
    img: tempImg,
    order: 2,
    type: 2,
  },
];
