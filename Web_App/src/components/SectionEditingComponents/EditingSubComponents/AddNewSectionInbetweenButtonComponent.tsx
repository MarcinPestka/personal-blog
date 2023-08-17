import { Observer } from "mobx-react-lite";
import { courseStore } from "../../../store/courseStore";
import { editingCourseStore } from "../../../store/editingSectionsStore";

export function AddNewSectionInbetweenButton({sectionOrder}:{sectionOrder:number}) {
    return (
    <Observer>
      {() => (
        <>
          <div onDragOver={()=>{editingCourseStore.elementDragSection.sectionOrder = sectionOrder;}} className={editingCourseStore.elementDrag === true && editingCourseStore.elementDragSection.sectionOrder === sectionOrder ? "inbetweenButtonActive":"inbetweenButton"} onClick={()=>{editingCourseStore.editingSection.sectionOrder = sectionOrder;}}>{editingCourseStore.elementDrag === true ?"Drop me here":"Add new section"}</div>
        </>
      )}
    </Observer>
  );
}
