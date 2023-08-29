import { useEffect } from "react";
import { Observer } from "mobx-react-lite";
import { editingCourseStore } from "../../store/editingSectionsStore";
import { SectionAddStage } from "../../services/SectionService";
import { AddNewSectionStepOne } from "./EditingSubComponents/AddNewSectionStepOneComponent";
import { AddNewSectionStepTwo } from "./EditingSubComponents/AddNewSectionStepTwoComponent";
import { AddNewSectionStepThree } from "./EditingSubComponents/AddNewSectionStepThreeComponent";
import { EditingViewComponent } from "./EditingSubComponents/EditingViewComponent";
import { CourseStore, courseStore } from "../../store/courseStore";

export function AddNewSection() {
  if (
    courseStore.activeSections &&
    !editingCourseStore.editingSection.sectionOrder
  ) {
    //editingCourseStore.editingSection.sectionOrder = courseStore.activeSections?.length + 1;
  }

  return (
    <Observer>
      {() => (
        <>
          <div className="addSectionWrapper">
            {editingCourseStore.newSectionStage ===
            SectionAddStage.sectionType ? (
              <>
                <EditingViewComponent />
                <AddNewSectionStepTwo />
              </>
            ) : (
              <></>
            )}
            {editingCourseStore.newSectionStage ===
            SectionAddStage.sectionContents ? (
              <>
                <EditingViewComponent />
                <AddNewSectionStepThree />
              </>
            ) : (
              <></>
            )}
          </div>
        </>
      )}
    </Observer>
  );
}
