import { Observer } from "mobx-react-lite";
import { SectionAddStage } from "../../../services/SectionService";
import { editingCourseStore } from "../../../store/editingCourseStore";
import { AddNewSectionBackButton } from "./AddNewSectionBackButtonComponent";

export function EditingViewComponent() {
  return (
    <Observer>
      {() => (
        <>
        <div className="editViewDiv">
          <span className="test2">
            <AddNewSectionBackButton />
          </span>
          {editingCourseStore.newSectionStage === SectionAddStage.sectionContents ? (
            <>
              <span className={editingCourseStore.sectionPreview ? "":"highlighted"} onClick={() => {editingCourseStore.sectionPreview = false}} style={{ marginLeft: "auto" }}>
                Edit
              </span>
              |
              <span className={editingCourseStore.sectionPreview ? "highlighted":""}  onClick={() => {editingCourseStore.sectionPreview = true}} style={{ marginRight: "auto" }}>
                Preview
              </span>
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
