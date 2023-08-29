import { Observer } from "mobx-react-lite";
import { courseStore } from "../../../store/courseStore";
import { editingCourseStore } from "../../../store/editingSectionsStore";
import { AddNewSection } from "../AddNewSectionComponent";
import { ISection } from "../../../models/section.model";
import { SectionAddStage } from "../../../services/SectionService";

export function AddNewSectionInbetweenButton({
  section
}: {
  section: number;
}) {
  return (
    <Observer>
      {() => (
        <>
          <div
            onDragOver={() => {
                if (editingCourseStore.elementDragSection.sectionOrder === section || editingCourseStore.elementDragSection.sectionOrder === (section-1)) {
                  console.log("nie powinno się zmieniać");
                }else{
                  editingCourseStore.elementDragSection.sectionOrder = section;
                }
            }}
            // className={`inbetweenButton${editingCourseStore.elementDrag === true &&
            //   editingCourseStore.elementDragSection.sectionOrder === section 
            //     ? "inbetweenButtonActive"
            //     : "inbetweenButton"
            //     } ${section === editingCourseStore.elementDragId || 
            //       editingCourseStore.elementDragId - section === -1 ? "invisible" : ""}`
            // }
            //${editingCourseStore.initialDragOrder === section || editingCourseStore.initialDragOrder === section - 1 ? "invisible":""}
            className={`inbetweenButton ${editingCourseStore.initialDragOrder === section || editingCourseStore.initialDragOrder === section - 1 ? "invisible":""} ${
                editingCourseStore.elementDragSection.sectionOrder === section ? "over":""}`}
            
            onClick={() => {
              editingCourseStore.editingSection.sectionOrder = section;
              editingCourseStore.newSectionStage = SectionAddStage.sectionType;
              editingCourseStore.editing = true;
            }}
          >
            {editingCourseStore.elementDrag === true
              ? "Drop me here" 
              : "Add new section"}
          </div>
          {editingCourseStore.editingSection.sectionOrder ===
            section ? (
            <AddNewSection />
          ) : (
            <></>
          )}
        </>
      )}
    </Observer>
  );
}