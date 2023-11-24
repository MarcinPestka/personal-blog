import { SectionTypeEnum } from "../services/SectionService";
import { TitleNoImageComponent } from "./Sections/TitleNoImageComponent/TitleNoImageComponent";
import { TextComponent } from "./Sections/TextComponent/TextComponent";
import { TitleComponent } from "./Sections/TitleComponent/TitleComponent";
import { ISection } from "../models/section.model";
import { CodeComponent } from "./Sections/CodeSection/CodeComponent";
import { editingCourseStore } from "../store/editingCourseStore";
import { TitleEditComponent } from "./Sections/TitleComponent/TitleEditComponent";
import { CodeEditComponent } from "./Sections/CodeSection/CodeEditComponent";
import { TitleNoImageEditComponent } from "./Sections/TitleNoImageComponent/TitleNoImageEditComponent";
import { sectionStore } from "../store/sectionStore";

export function BaseComponent(props: ISection) {
  var Component;
  
  if((sectionStore.newSection.id !== props.id || editingCourseStore.sectionPreview)){
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
  }else {
    (() => {
      switch (props.sectionType) {
        case SectionTypeEnum.Title:
          Component = <TitleEditComponent/>;
          break;
        case SectionTypeEnum.TextSection:
          Component = <TextComponent {...props}/>;
          break;
        case SectionTypeEnum.TitleNoImage:
          Component = <TitleNoImageEditComponent/>;
          break;
        case SectionTypeEnum.CodeBlockSection:
          Component = <CodeEditComponent/>;
          break;
      }
    })();
  }
  

  return Component;
}
