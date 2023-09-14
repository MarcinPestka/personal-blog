import { editingCourseStore } from "../../../store/editingCourseStore";
import {
  SectionAddStage,
  SectionTypeEnum,
} from "../../../services/SectionService";
import { sectionStore } from "../../../store/sectionStore";

export function AddNewSectionStepTwo() {
  return (
    <>
      <div className="addSectionInnerWrapper">
        <div
          className="addSectionButton stepTwo"
          onClick={() => {
            editingCourseStore.newSectionType = SectionTypeEnum.Title;
            sectionStore.newSection.sectionType = SectionTypeEnum.Title;
            editingCourseStore.newSectionStage = SectionAddStage.sectionContents;
          }}
        >
          Title Section
        </div>
        <div
          className="addSectionButton stepTwo"
          onClick={() => {
            editingCourseStore.newSectionType = SectionTypeEnum.TitleNoImage;
            sectionStore.newSection.sectionType = SectionTypeEnum.TitleNoImage;
            editingCourseStore.newSectionStage = SectionAddStage.sectionContents;
          }}
        >
          Title without image
        </div>
        <div
          className="addSectionButton stepTwo"
          onClick={() => {
            editingCourseStore.newSectionType = SectionTypeEnum.CodeBlockSection;
            sectionStore.newSection.sectionType = SectionTypeEnum.CodeBlockSection;
            editingCourseStore.newSectionStage = SectionAddStage.sectionContents;
          }}
        >
          Code Block Section
        </div>
      </div>
    </>
  );
}
