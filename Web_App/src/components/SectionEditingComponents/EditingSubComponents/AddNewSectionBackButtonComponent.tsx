import { editingCourseStore } from "../../../store/editingCourseStore";
import { SectionAddStage } from "../../../services/SectionService";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { runInAction } from "mobx";

export function AddNewSectionBackButton() {
  function handleClick() {
    switch (editingCourseStore.newSectionStage) {
      case SectionAddStage.sectionType:
        runInAction(()=>{
          editingCourseStore.newSectionType = undefined;
          editingCourseStore.newSectionStage = undefined;
        })
        break;
      case SectionAddStage.sectionContents:
        runInAction(()=>{        
          editingCourseStore.newSectionType = undefined;
          editingCourseStore.newSectionStage = SectionAddStage.sectionType;
        })
        break;
    }
  }
  return (
    <>
      {editingCourseStore.newSectionStage !== undefined ? (
        <div
          className="addSectionBackButton"
          onClick={() => {
            handleClick();
          }}
        >
          <ChevronLeftIcon/>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
