import { Observer } from "mobx-react-lite";
import { SectionAddStage } from "../../../services/SectionService";
import { editingCourseStore } from "../../../store/editingSectionsStore";
import { sectionStore } from "../../../store/sectionStore";
import { BaseComponent } from "../../BaseComponent";
import { BaseEditComponent } from "../../BaseEditComponent";
import { BaseComponentWrapper } from "../../BaseComponentWrapper";
import { useEffect } from "react";

export function AddNewSectionStepThree() {
  useEffect(() => {
  }, [sectionStore.newSection]);

  return (
    <Observer>
      {() => (
        <>
          <div className="sectionTypeDiv">
            {editingCourseStore.sectionPreview ? (
              <BaseComponentWrapper {...editingCourseStore.editingSection} />
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
