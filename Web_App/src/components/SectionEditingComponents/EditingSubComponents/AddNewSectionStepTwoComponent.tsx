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

export function AddNewSectionStepTwo() {
  function handleClick(sectionType:SectionTypeEnum) {
    runInAction(()=>{
      editingCourseStore.newSectionType = sectionType;
      sectionStore.newSection.sectionType = sectionType;
      editingCourseStore.newSectionStage = SectionAddStage.sectionContents;
    })
  }

    return (
    <>
      <div className="addSectionInnerWrapper">        
      <div
          className="addSectionButton stepTwo"
          onClick={() => {handleClick(SectionTypeEnum.Title)}}>
          <img src={titleSectionIcon} alt=""/> <br />
          Title Section
        </div>
        <div
          className="addSectionButton stepTwo"
          onClick={() => {handleClick(SectionTypeEnum.TitleNoImage)}}>
          <img src={titleImageSectionIcon} alt=""/> <br />
          Title without image
        </div>
        <div
          className="addSectionButton stepTwo"
          onClick={() => {handleClick(SectionTypeEnum.CodeBlockSection)}}>
          <img src={codeSectionIcon} alt=""/> <br />
          Code Block Section
        </div>
        <div
          className="addSectionButton stepTwo"
          onClick={() => {handleClick(SectionTypeEnum.TextSection)}}>
          <img src={titleSectionIcon} alt=""/> <br />
          Text section
        </div> 
        <div
          className="addSectionButton stepTwo"
          onClick={() => {handleClick(SectionTypeEnum.Title)}}>
          <img src={titleSectionIcon} alt=""/> <br />
          Title Section
        </div>
        <div
          className="addSectionButton stepTwo"
          onClick={() => {handleClick(SectionTypeEnum.Title)}}>
          <img src={titleSectionIcon} alt=""/><br />
          Title Section 
        </div>
        <div
          className="addSectionButton stepTwo"
          onClick={() => {handleClick(SectionTypeEnum.Title)}}>
          <img src={titleSectionIcon} alt=""/><br />
          Title Section 
        </div>
      </div>
    </>
  );
}
