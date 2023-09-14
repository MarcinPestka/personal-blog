import { ISection } from "../models/section.model";
import { BaseComponent } from "./BaseComponent";
import { editingCourseStore } from "../store/editingCourseStore";
import { Observer } from "mobx-react-lite";
import { BaseEditComponent } from "./BaseEditComponent";
import { UpperCorner } from "./SectionEditingComponents/EditingSubComponents/UpperCornerComponent";
import { AddNewSectionInbetweenButton } from "./SectionEditingComponents/EditingSubComponents/AddNewSectionInbetweenButtonComponent";
import { sectionStore } from "../store/sectionStore";
import { editSection } from "../services/SectionService";

export function BaseComponentWrapper(props: ISection) {
  async function handleClick() {
    editSection(sectionStore.newSection);
    sectionStore.newSection = {} as ISection;
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
