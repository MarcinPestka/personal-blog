import { Observer } from "mobx-react-lite";
import { SectionAddStage, deleteSectionById } from "../../../services/SectionService";
import { editingCourseStore } from "../../../store/editingCourseStore";
import { ISection } from "../../../models/section.model";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { sectionStore } from "../../../store/sectionStore";
import { Tooltip } from "@mui/material";

export function UpperCorner(props: ISection) {
  async function handleDeleteClick() {
    deleteSectionById(props.id);
  }
  async function handleEditClick() {
    if (sectionStore.newSection.id === props.id) {
      sectionStore.newSection = {} as ISection;
    } else {
      editingCourseStore.editing = true;
      sectionStore.newSection = props;
    }
  }

  return (
    <Observer>
      {() => (
        <>
          <div className={editingCourseStore.editPage ? "editSection":"editingSection invisible"}>
          <Tooltip title={<>Are you sure? <br /><span style={{cursor:"pointer"}} onClick={() => {handleDeleteClick();}}>Yes</span></>}>
            <span className="deleteButton">
                <DeleteIcon fontSize="small" />
                usuń
            </span>
          </Tooltip>

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
