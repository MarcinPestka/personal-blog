import { useEffect } from "react";
import { Observer } from "mobx-react-lite";
import { editingCourseStore } from "../../../store/editingCourseStore";
import { SectionAddStage } from "../../../services/SectionService";
import { runInAction } from "mobx";

export function AddNewSectionStepOne() {

  return (
    <>
      <div
        className="addSectionButton stepOne"
        onClick={() => {
          runInAction(()=>{
          editingCourseStore.newSectionStage = SectionAddStage.sectionType;
          editingCourseStore.editing = true;
          })
        }}
      >
        Dodaj następną sekcję
      </div>
    </>
  );
}
