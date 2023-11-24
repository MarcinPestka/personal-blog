import { editingCourseStore } from "../../../store/editingCourseStore";
import {
  SectionAddStage,
  SectionTypeEnum,
} from "../../../services/SectionService";
import { sectionStore } from "../../../store/sectionStore";
import codeSectionIcon from "../../../image/sectionIcons/CodeSection.svg";
import titleSectionIcon from "../../../image/sectionIcons/TitleSecion.svg";
import titleImageSectionIcon from "../../../image/sectionIcons/TitileImageSection.svg";
import { runInAction } from "mobx";
import { TitleNoImageComponent } from "../../Sections/TitleNoImageComponent/TitleNoImageComponent";

export function AddNewSectionStepTwo() {
  return (
    <>
      <div className="addSectionInnerWrapper">
        <div
          className="addSectionButton stepTwo"
          onClick={() => {
            runInAction(()=>{
              editingCourseStore.newSectionType = SectionTypeEnum.Title;
              sectionStore.newSection.sectionType = SectionTypeEnum.Title;
              editingCourseStore.newSectionStage = SectionAddStage.sectionContents;
            })

          }}
        >
          Title Section
          <img src={titleSectionIcon} alt=""/>
        </div>
        <div
          className="addSectionButton stepTwo"
          onClick={() => {
            runInAction(()=>{
              editingCourseStore.newSectionType = SectionTypeEnum.TitleNoImage;
              sectionStore.newSection.sectionType = SectionTypeEnum.TitleNoImage;
              editingCourseStore.newSectionStage = SectionAddStage.sectionContents;
            })

          }}
        >
          Title without image
          <img src={titleImageSectionIcon} alt=""/>
        </div>
        <div
          className="addSectionButton stepTwo"
          onClick={() => {
            runInAction(()=>{
              editingCourseStore.newSectionType = SectionTypeEnum.CodeBlockSection;
              sectionStore.newSection.sectionType = SectionTypeEnum.CodeBlockSection;
              editingCourseStore.newSectionStage = SectionAddStage.sectionContents;
            })

          }}
        >
          Code Block Section
          <img src={codeSectionIcon} alt=""/>
        </div>
        <div
          className="addSectionButton stepTwo"
          onClick={() => {
            runInAction(()=>{
              editingCourseStore.newSectionType = SectionTypeEnum.TextSection;
              sectionStore.newSection.sectionType = SectionTypeEnum.TextSection;
              editingCourseStore.newSectionStage = SectionAddStage.sectionContents;
            })

          }}
        >
          Text section
          <img src={titleSectionIcon} alt=""/>
        </div>
      </div>
    </>
  );
}
