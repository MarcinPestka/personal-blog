import { Observer } from "mobx-react-lite";
import { editingCourseStore } from "../../store/editingCourseStore";
import { SectionAddStage } from "../../services/SectionService";
import { AddNewSectionStepTwo } from "./EditingSubComponents/AddNewSectionStepTwoComponent";
import { AddNewSectionStepThree } from "./EditingSubComponents/AddNewSectionStepThreeComponent";
import { EditingViewComponent } from "./EditingSubComponents/EditingViewComponent";
import { AddNewSectionBackButton } from "./EditingSubComponents/AddNewSectionBackButtonComponent";

export function AddNewSection() {
  return (
    <Observer>
      {() => (
        <>
          <div className="addSectionWrapper">
          <AddNewSectionBackButton />
            {editingCourseStore.newSectionStage ===
            SectionAddStage.sectionType ? (
              <>
                <AddNewSectionStepTwo />
              </>
            ) : (
              <></>
            )}
            {editingCourseStore.newSectionStage ===
            SectionAddStage.sectionContents ? (
              <>
                <EditingViewComponent/>
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
