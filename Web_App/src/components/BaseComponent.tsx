import { SectionTypeEnum } from "../services/SectionService";
import { TitleNoImageComponent } from "./Sections/TitleNoImageComponent";
import { TextComponent } from "./Sections/TextComponent";
import { TitleComponent } from "./Sections/TitleComponent";
import { ISection } from "../models/section.model";
import { CodeComponent } from "./Sections/CodeComponent";

export function BaseComponent(props: ISection) {
  var Component = <TitleComponent {...props}></TitleComponent>;

  (() => {
    switch (props.sectionType) {
      case SectionTypeEnum.title:
        Component = <TitleComponent {...props}></TitleComponent>;
        break;
      case SectionTypeEnum.text:
        Component = <TextComponent {...props}></TextComponent>;
        break;
      case SectionTypeEnum.TitleNoImage:
        Component = <TitleNoImageComponent {...props}></TitleNoImageComponent>;
        break;
        case SectionTypeEnum.Code:
          Component = <CodeComponent {...props}></CodeComponent>;
          break;
    }
  })();

  return Component;
}
