import { SectionTypeEnum } from "../services/SectionService";

export interface ISection {
  id: number;
  postId?: string;
  Name: string;
  title?: string;
  subTitle?: string;
  text?: string;
  Img?: string;
  order: number;
  sectionType: SectionTypeEnum | undefined;
  imageName?: string;
  topicId?: number;
}