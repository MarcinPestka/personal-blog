import { Section, SectionTypeEnum } from "../services/SectionService";
import { TitleNoImageComponent } from "./Sections/TitleNoImageComponent";
import { TextComponent } from "./Sections/TextComponent";
import { TitleComponent } from "./Sections/TitleComponent";

export function BaseComponent(props: Section) {
  var Component = <TitleComponent {...props}></TitleComponent>;

  (() => {
    switch (props.type) {
      case SectionTypeEnum.Title:
        Component = <TitleComponent {...props}></TitleComponent>;
        break;
      case SectionTypeEnum.Text:
        Component = <TextComponent {...props}></TextComponent>;
        break;
      case SectionTypeEnum.TitleNoImage:
        Component = <TitleNoImageComponent {...props}></TitleNoImageComponent>;
        break;
    }
  })();

  return Component;
}
