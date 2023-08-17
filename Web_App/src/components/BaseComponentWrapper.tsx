import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { ISection } from "../models/section.model";
import { BaseComponent } from "./BaseComponent";
import { editingCourseStore } from "../store/editingSectionsStore";
import { Observer } from "mobx-react-lite";
import { ApiAuthDelete, ApiAuthPut } from "../services/ApiService";
import { sectionStore } from "../store/sectionStore";
import { courseStore } from "../store/courseStore";
import { TitleNoImageEditComponent } from "./Sections/TitleNoImageComponent/TitleNoImageEditComponent";
import { BaseEditComponent } from "./BaseEditComponent";
import { Tooltip } from "@mui/material";
import { useEffect } from "react";
import { UpperCorner } from "./SectionEditingComponents/EditingSubComponents/UpperCornerComponent";
import { AddNewSection } from "./SectionEditingComponents/AddNewSectionComponent";
import { AddNewSectionInbetweenButton } from "./SectionEditingComponents/EditingSubComponents/AddNewSectionInbetweenButtonComponent";

export function BaseComponentWrapper(props: ISection) {
  async function handleClikc() {
    await ApiAuthPut("Course/EditSection", editingCourseStore.editingSection);
    editingCourseStore.editingSection = {} as ISection;
    await courseStore.getCourseById("6");
  }

  return (
    <Observer>
      {() => (
        <>
          {editingCourseStore.editPage ? (
            <div>
              <AddNewSectionInbetweenButton sectionOrder={props.sectionOrder} />
              {editingCourseStore.editingSection.sectionOrder ===
                props.sectionOrder && !editingCourseStore.sectionPreview ? (
                <AddNewSection />
              ) : (
                <></>
              )}
              {editingCourseStore.editingSection?.id !== props.id ? (
                <>
                  <UpperCorner {...props} />
                  <BaseComponent {...props} />
                  <div className="editButton2"></div>
                </>
              ) : (
                <>
                  {editingCourseStore.sectionPreview ? (
                    <>
                      <BaseComponent {...editingCourseStore.editingSection} />
                    </>
                  ) : (
                    <>
                      <UpperCorner {...props} />
                      <BaseEditComponent
                        sectionType={props.sectionType}
                      ></BaseEditComponent>
                      <button
                        onClick={async () => {handleClikc();}}>
                        Save changes
                      </button>
                      <div className="editButton2"></div>
                    </>
                  )}
                </>
              )}
            </div>
          ) : (
            <BaseComponent {...props} />
          )}
        </>
      )}
    </Observer>
  );
}
