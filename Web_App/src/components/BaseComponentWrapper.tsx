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
import { sectionStore } from "../store/sectionStore";

export function BaseComponentWrapper(props: ISection) {
  async function handleClick() {
    await ApiAuthPut("Section/EditSection", sectionStore.newSection).then((response) => {
      let sections: ISection[] = response.data;
      runInAction(() => {
        /// ZMIANA 
        courseStore.activeSections = OrderSections(sections);
      });
    });;
    sectionStore.newSection = {} as ISection;
    await courseStore.getCourseById(courseStore.course.id);
  }


  return (
    <Observer>
      {() => (
        <>
          {editingCourseStore.editPage === true ? (
            <>
            <AddNewSectionInbetweenButton section={props.order} />
            <UpperCorner {...props} />
            </>
            ) : (
            <></>
          )}
            {sectionStore.newSection?.id !== props.id ? (
              <>

                <BaseComponent {...props} />
              </>
            ) : (
              <>
                {editingCourseStore.sectionPreview ? (
                    <BaseComponent {...sectionStore.newSection} />
                ) : (
                  <>
                    <BaseEditComponent sectionType={props.sectionType} />
                    <button
                      onClick={async () => {
                        handleClick();
                      }}
                    >
                      Save changes
                    </button>
                  </>
                )}
              </>
            )}
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
