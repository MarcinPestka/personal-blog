import { Observer } from "mobx-react-lite";
import { deleteSectionById } from "../../../services/SectionService";
import { editingCourseStore } from "../../../store/editingCourseStore";
import { ISection } from "../../../models/section.model";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { sectionStore } from "../../../store/sectionStore";

export function UpperCorner(props: ISection) {
  async function handleClick() {
    deleteSectionById(props.id);
  }

  return (
    <Observer>
      {() => (
        <>
          <div className={editingCourseStore.editPage ? "editSection":"editingSection invisible"}>
              <span
                className="deleteButton"
                onClick={() => {
                  handleClick();
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
                if (sectionStore.newSection.id === props.id) {
                  sectionStore.newSection = {} as ISection;
                } else {
                  sectionStore.newSection = props;
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
