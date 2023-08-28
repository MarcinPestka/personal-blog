import { SectionTypeEnum } from "../services/SectionService";
import { TitleNoImageComponent } from "./Sections/TitleNoImageComponent/TitleNoImageComponent";
import { TextComponent } from "./Sections/TextComponent/TextComponent";
import { TitleComponent } from "./Sections/TitleComponent/TitleComponent";
import { ISection } from "../models/section.model";
import { CodeComponent } from "./Sections/CodeSection/CodeComponent";
import { BaseComponentWrapper } from "./BaseComponentWrapper";

export function BaseComponent(props: ISection) {
  var Component;
  
  (() => {
    switch (props.sectionType) {
      case SectionTypeEnum.Title:
        Component = <TitleComponent {...props}></TitleComponent>;
        break;
      case SectionTypeEnum.TextSection:
        Component = <TextComponent {...props}></TextComponent>;
        break;
      case SectionTypeEnum.TitleNoImage:
        Component = <TitleNoImageComponent {...props}></TitleNoImageComponent>;
        break;
      case SectionTypeEnum.CodeBlockSection:
        Component = <CodeComponent {...props}></CodeComponent>;
        break;
    }
  })();

  return Component;
}
