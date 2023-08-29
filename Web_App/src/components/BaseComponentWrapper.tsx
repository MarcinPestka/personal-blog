import { ISection } from "../models/section.model";
import { BaseComponent } from "./BaseComponent";
import { editingCourseStore } from "../store/editingSectionsStore";
import { Observer } from "mobx-react-lite";
import { ApiAuthPut } from "../services/ApiService";
import { courseStore } from "../store/courseStore";
import { BaseEditComponent } from "./BaseEditComponent";
import { UpperCorner } from "./SectionEditingComponents/EditingSubComponents/UpperCornerComponent";
import { AddNewSectionInbetweenButton } from "./SectionEditingComponents/EditingSubComponents/AddNewSectionInbetweenButtonComponent";
import { runInAction } from "mobx";
import { EditingViewComponent } from "./SectionEditingComponents/EditingSubComponents/EditingViewComponent";

export function BaseComponentWrapper(props: ISection) {
  async function handleClikc() {
    await ApiAuthPut("Course/EditSection", editingCourseStore.editingSection);
    editingCourseStore.editingSection = {} as ISection;
    await courseStore.getCourseById(courseStore.course.id);
  }

  async function handleDragEnd() {
    if (
      editingCourseStore.elementDragId -
        editingCourseStore.elementDragSection.sectionOrder <
      0
    ) {
      editingCourseStore.elementDragSection.sectionOrder -= 1;

    }     
    await ApiAuthPut(
      "Course/EditSection",
      editingCourseStore.elementDragSection
    );
    editingCourseStore.elementDrag = false;
    editingCourseStore.elementDragSection = {} as ISection;
  }

  return (
    <Observer>
      {() => (
        <>
          {editingCourseStore.editPage === true ? (
            <AddNewSectionInbetweenButton section={props.sectionOrder} />
          ) : (
            <></>
          )}
          <UpperCorner {...props} />
          <div
            draggable={true}
            onDragEnd={async () => {
              handleDragEnd();
            }}
            onDragStart={() => {
              runInAction(() => {
                editingCourseStore.elementDrag = true;
                editingCourseStore.initialDragOrder = props.sectionOrder;
                editingCourseStore.elementDragSection = props;
                editingCourseStore.elementDragId = props.sectionOrder;
              });
            }}
          >
            {editingCourseStore.editingSection?.id !== props.id ? (
              <>

                <BaseComponent {...props} />
              </>
            ) : (
              <>
                {editingCourseStore.sectionPreview ? (
                    <BaseComponent {...editingCourseStore.editingSection} />
                ) : (
                  <>
                    <BaseEditComponent sectionType={props.sectionType} />
                    <button
                      onClick={async () => {
                        handleClikc();
                      }}
                    >
                      Save changes
                    </button>
                  </>
                )}
              </>
            )}
          </div>
          <div
            className={
              editingCourseStore.editPage
                ? "editButton2"
                : "editButton2 invisible"
            }
          ></div>
        </>
      )}
    </Observer>
  );
}
