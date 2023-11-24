import { Observer } from "mobx-react-lite";
import { editingCourseStore } from "../../../store/editingCourseStore";
import { AddNewSectionBackButton } from "./AddNewSectionBackButtonComponent";
import { runInAction } from "mobx";

export function EditingViewComponent() {
  return (
    <Observer>
      {() => (
        <>
        <div className="editViewDiv">
          <span className="test2">
            <AddNewSectionBackButton />
          </span>
            <>
              <span className={editingCourseStore.sectionPreview ? "":"highlighted"} onClick={() => {runInAction(()=>{editingCourseStore.sectionPreview = false}) }} style={{ marginLeft: "auto" }}>
                Edit
              </span>
              |
              <span className={editingCourseStore.sectionPreview ? "highlighted":""}  onClick={() => {runInAction(()=>{editingCourseStore.sectionPreview = true})}} style={{ marginRight: "auto" }}>
                Preview
              </span>
            </>
        </div>
        </>
      )}
    </Observer>
  );
}
