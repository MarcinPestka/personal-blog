import { courseStore } from "../../../store/courseStore";
import { Observer } from "mobx-react-lite";
import { LectureElement } from "./LectureElement";
import { DraggableComponent } from "../../Draggable/DraggableComponent";

export default function NestedList() {
  return (
    <Observer>
      {() => (
        <div className="sideBarWrapper" style={{ maxWidth: "360px", minWidth: "360px" }}>
          <>
            {courseStore.course &&
              courseStore.course.lectures.map((lecture) => (
                <>
                  <DraggableComponent test={lecture}/>
                </>
              ))}
          </>
        </div>
      )}
    </Observer>
  );
}
