import { Observer } from "mobx-react-lite";
import { sectionStore } from "../../../store/sectionStore";
import { BaseComponent } from "../../BaseComponent";

export function AddNewSectionStepThree() {

  return (
    <Observer>
      {() => (
        <>
          <BaseComponent {...sectionStore.newSection} />
        </>
      )}
    </Observer>
  );
}
