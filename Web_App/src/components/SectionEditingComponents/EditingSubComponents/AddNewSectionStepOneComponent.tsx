import { useEffect } from "react";
import { Observer } from "mobx-react-lite";
import { editingCourseStore } from "../../../store/editingCourseStore";
import { SectionAddStage } from "../../../services/SectionService";

export function AddNewSectionStepOne() {

  return (
    <>
      <div
        className="addSectionButton stepOne"
        onClick={() => {
          editingCourseStore.newSectionStage = SectionAddStage.sectionType;
          editingCourseStore.editing = true;
        }}
      >
        Dodaj następną sekcję
      </div>
    </>
  );
}
