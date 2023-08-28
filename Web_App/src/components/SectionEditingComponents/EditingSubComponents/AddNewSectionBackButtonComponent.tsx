import { editingCourseStore } from "../../../store/editingSectionsStore";
import { SectionAddStage } from "../../../services/SectionService";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export function AddNewSectionBackButton() {
  function handleClick() {
    switch (editingCourseStore.newSectionStage) {
      case SectionAddStage.sectionType:
        editingCourseStore.newSectionType = undefined;
        editingCourseStore.newSectionStage = undefined;
        break;
      case SectionAddStage.sectionContents:
        editingCourseStore.newSectionType = undefined;
        editingCourseStore.newSectionStage = undefined;
        break;
      default:
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
