import { ISection } from "../models/section.model";
import { BaseComponent } from "./BaseComponent";
import { editingCourseStore } from "../store/editingCourseStore";
import { Observer } from "mobx-react-lite";
import { ApiAuthPut } from "../services/ApiService";
import { courseStore } from "../store/courseStore";
import { BaseEditComponent } from "./BaseEditComponent";
import { UpperCorner } from "./SectionEditingComponents/EditingSubComponents/UpperCornerComponent";
import { AddNewSectionInbetweenButton } from "./SectionEditingComponents/EditingSubComponents/AddNewSectionInbetweenButtonComponent";
import { runInAction } from "mobx";
import { EditingViewComponent } from "./SectionEditingComponents/EditingSubComponents/EditingViewComponent";
import { OrderSections } from "../services/SectionService";

export function BaseComponentWrapper(props: ISection) {
  async function handleClikc() {
    await ApiAuthPut("Section/EditSection", editingCourseStore.editingSection).then((response) => {
      let sections: ISection[] = response.data;
      runInAction(() => {
        courseStore.activeSections = OrderSections(sections);
      });
    });;
    editingCourseStore.editingSection = {} as ISection;
    await courseStore.getCourseById(courseStore.course.id);
  }

  async function handleDragEnd() {
    if (
      editingCourseStore.elementDragId -
        editingCourseStore.elementDragSection.order <
      0
    ) {
      editingCourseStore.elementDragSection.order -= 1;

    }     
    await ApiAuthPut(
      "Section/EditSection",
      editingCourseStore.elementDragSection
    ).then((response) => {
      let sections: ISection[] = response.data;
      runInAction(() => {
        courseStore.activeSections = OrderSections(sections);
      });
    });;
    editingCourseStore.elementDrag = false;
    editingCourseStore.elementDragSection = {} as ISection;
  }

  return (
    <Observer>
      {() => (
        <>
          {editingCourseStore.editPage === true ? (
            <AddNewSectionInbetweenButton section={props.order} />
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
                editingCourseStore.initialDragOrder = props.order;
                editingCourseStore.elementDragSection = props;
                editingCourseStore.elementDragId = props.order;
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
