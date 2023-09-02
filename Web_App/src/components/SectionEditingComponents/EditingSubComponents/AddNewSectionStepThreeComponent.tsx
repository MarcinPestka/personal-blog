import { Observer } from "mobx-react-lite";
import { editingCourseStore } from "../../../store/editingCourseStore";
import { sectionStore } from "../../../store/sectionStore";
import { BaseEditComponent } from "../../BaseEditComponent";
import { BaseComponent } from "../../BaseComponent";

export function AddNewSectionStepThree() {

  return (
    <Observer>
      {() => (
        <>
          <div className="sectionTypeDiv">
            {editingCourseStore.sectionPreview ? (
              <BaseComponent {...editingCourseStore.editingSection} />
            ) : (
              <>
                <BaseEditComponent
                  sectionType={editingCourseStore.newSectionType}
                />
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
          </div>
        </>
      )}
    </Observer>
  );
}
