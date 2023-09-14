import { useEffect } from "react";
import { Observer } from "mobx-react-lite";
import { editingCourseStore } from "../../store/editingCourseStore";
import { SectionAddStage } from "../../services/SectionService";
import { AddNewSectionStepOne } from "./EditingSubComponents/AddNewSectionStepOneComponent";
import { AddNewSectionStepTwo } from "./EditingSubComponents/AddNewSectionStepTwoComponent";
import { AddNewSectionStepThree } from "./EditingSubComponents/AddNewSectionStepThreeComponent";
import { EditingViewComponent } from "./EditingSubComponents/EditingViewComponent";
import { CourseStore, courseStore } from "../../store/courseStore";
import { sectionStore } from "../../store/sectionStore";

export function AddNewSection() {
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
