import { Observer } from "mobx-react-lite";
import { SectionAddStage } from "../../../services/SectionService";
import { editingCourseStore } from "../../../store/editingSectionsStore";
import { AddNewSectionBackButton } from "./AddNewSectionBackButtonComponent";
import { Tooltip } from "@mui/material";
import { ApiAuthDelete } from "../../../services/ApiService";
import { ISection } from "../../../models/section.model";
import { courseStore } from "../../../store/courseStore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export function UpperCorner(props: ISection) {
    async function handleClick() {
        await ApiAuthDelete(`Course/DeleteSection?sectionId=${props.id}`, "");
        await courseStore.getCourseById("6");
      }
    
  return (
    <Observer>
      {() => (
        <>
              <div className="editSection">
              <Tooltip title={"tets"}>
              <span
                  className="deleteButton"
                  onClick={() => {
                    handleClick();
                  }}
                >
                  <DeleteIcon fontSize="small" />
                  usuń
                </span>
              </Tooltip>

                {" "}
                |{" "}
                <span
                  className={editingCourseStore.editingSection.id === props.id ? "editButton editingColor" : "editButton"}
                  onClick={() => {
                    if (editingCourseStore.editingSection.id === props.id) {
                        editingCourseStore.editingSection = {} as ISection;
                    }else{
                        editingCourseStore.editingSection = props;
                    }
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
