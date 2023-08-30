import { editingCourseStore } from "../../../store/editingCourseStore";
import {
  SectionAddStage,
  SectionTypeEnum,
} from "../../../services/SectionService";

export function AddNewSectionStepTwo() {
  return (
    <>
      <div className="addSectionInnerWrapper">
        <div
          className="addSectionButton stepTwo"
          onClick={() => {
            editingCourseStore.newSectionType = SectionTypeEnum.Title;
            editingCourseStore.editingSection.sectionType = SectionTypeEnum.Title;
            editingCourseStore.newSectionStage = SectionAddStage.sectionContents;
          }}
        >
          Title Section
        </div>
        <div
          className="addSectionButton stepTwo"
          onClick={() => {
            editingCourseStore.newSectionType = SectionTypeEnum.TitleNoImage;
            editingCourseStore.editingSection.sectionType = SectionTypeEnum.TitleNoImage;
            editingCourseStore.newSectionStage = SectionAddStage.sectionContents;
          }}
        >
          Title without image
        </div>
        <div
          className="addSectionButton stepTwo"
          onClick={() => {
            editingCourseStore.newSectionType = SectionTypeEnum.CodeBlockSection;
            editingCourseStore.editingSection.sectionType = SectionTypeEnum.CodeBlockSection;
            editingCourseStore.newSectionStage = SectionAddStage.sectionContents;
          }}
        >
          Code Block Section
        </div>
      </div>
    </>
  );
}
