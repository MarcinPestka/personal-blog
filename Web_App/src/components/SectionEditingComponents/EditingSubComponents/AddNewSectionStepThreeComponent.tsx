import { Observer } from "mobx-react-lite";
import { sectionStore } from "../../../store/sectionStore";
import { BaseComponent } from "../../BaseComponent";
import { editingCourseStore } from "../../../store/editingCourseStore";

export function AddNewSectionStepThree() {
  return (
    <Observer>
      {() => (
        <>
        <BaseComponent {...sectionStore.newSection} />
        <button
            onClick={() => {
              sectionStore.AddNewSection();
            }}
            >
            {" "}
            Save{" "}
          </button>
        </>
      )}
    </Observer>
  ); 
}