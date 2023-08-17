import { SectionTypeEnum } from "../services/SectionService";

export interface ISection {
  id: number;
  postId: number;
  Name: string;
  title?: string;
  subTitle?: string;
  text?: string;
  Img?: string;
  sectionOrder: number;
  sectionType: SectionTypeEnum | undefined;
  imageName?: string;
  topicId?: number;
}
