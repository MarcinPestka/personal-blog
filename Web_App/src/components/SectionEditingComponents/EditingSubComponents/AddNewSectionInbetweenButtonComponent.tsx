import { Observer } from "mobx-react-lite";
import { courseStore } from "../../../store/courseStore";
import { editingCourseStore } from "../../../store/editingCourseStore";
import { AddNewSection } from "../AddNewSectionComponent";
import { ISection } from "../../../models/section.model";
import { SectionAddStage } from "../../../services/SectionService";
import { sectionStore } from "../../../store/sectionStore";

export function AddNewSectionInbetweenButton({section}: {section: number;}) {
  return (
    <Observer>
      {() => (
        <>
          <div
            onDragOver={() => {
                if (editingCourseStore.elementDragSection.order === section || editingCourseStore.elementDragSection.order === (section-1)) {
                }else{
                  editingCourseStore.elementDragSection.order = section;
                }
            }}
            className={`inbetweenButton ${editingCourseStore.initialDragOrder === section || editingCourseStore.initialDragOrder === section - 1 ? "invisible":""} ${
                editingCourseStore.elementDragSection.order === section ? "over":""}`}
            
            onClick={() => {
              sectionStore.newSection.order = section;
              editingCourseStore.newSectionStage = SectionAddStage.sectionType;
              editingCourseStore.editing = true;
            }}
          >
            {editingCourseStore.elementDrag === true
              ? "Drop me here" 
              : "Add new section"}
          </div>
          {sectionStore.newSection.order ===
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
