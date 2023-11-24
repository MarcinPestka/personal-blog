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
import { Observer } from "mobx-react-lite";
import { TextEditComponent } from "./Sections/TextComponent/TextEditComponent";

export function BaseComponent(props: ISection) {

  var Component = () =>{
  if((sectionStore.newSection.id !== props.id || editingCourseStore.sectionPreview)){
      switch (props.sectionType) {
        case SectionTypeEnum.Title:
          return <TitleComponent {...props}></TitleComponent>;
        case SectionTypeEnum.TextSection:
          return <TextComponent {...props}></TextComponent>;
        case SectionTypeEnum.TitleNoImage:
          return <TitleNoImageComponent {...props}></TitleNoImageComponent>;
        case SectionTypeEnum.CodeBlockSection:
          return <CodeComponent {...props}></CodeComponent>;
      }
  }else {
      switch (props.sectionType) {
        case SectionTypeEnum.Title:
          return <TitleEditComponent/>;
        case SectionTypeEnum.TextSection:
          return <TextEditComponent/>;
        case SectionTypeEnum.TitleNoImage:
          return <TitleNoImageEditComponent/>;
        case SectionTypeEnum.CodeBlockSection:
          return <CodeEditComponent/>;
      }
  }} 

  return (
    <Observer>
      {() => (
        <>
          {Component()}
        </>
      )}
    </Observer>
  );
}
