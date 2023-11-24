import { Observer } from "mobx-react-lite";
import { SectionAddStage, deleteSectionById } from "../../../services/SectionService";
import { editingCourseStore } from "../../../store/editingCourseStore";
import { ISection } from "../../../models/section.model";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { sectionStore } from "../../../store/sectionStore";

export function UpperCorner(props: ISection) {
  async function handleDeleteClick() {
    deleteSectionById(props.id);
  }
  async function handleEditClick() {
    if (sectionStore.newSection.id === props.id) {
      sectionStore.newSection = {} as ISection;
    } else {
      sectionStore.newSection = props;
    }
  }

  return (
    <Observer>
      {() => (
        <>
          <div className={editingCourseStore.editPage ? "editSection":"editingSection invisible"}>
              <span
                className="deleteButton"
                onClick={() => {
                  handleDeleteClick();
                }}
              >
                <DeleteIcon fontSize="small" />
                usuń
              </span>
            |
            <span
              className={
                sectionStore.newSection.id === props.id
                  ? "editButton editingColor"
                  : "editButton"
              }
              onClick={() => {
                handleEditClick();
              }}
            >
              <EditIcon fontSize="small" />
              edytuj
            </span>
          </div>
        </>
      )}
    </Observer>
  );
}
