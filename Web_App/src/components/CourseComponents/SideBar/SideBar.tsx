import { courseStore } from "../../../store/courseStore";
import { Observer } from "mobx-react-lite";
import { DraggableComponent } from "../../Draggable/DraggableComponent";
import NewLecture from "./NewLecture";

export default function NestedList() {
  return (
    <Observer>
      {() => (
        <div className="sideBarWrapper" style={{ maxWidth: "360px", minWidth: "360px" }}>
          <>
            {courseStore.course &&
              courseStore.course.lectures.map((lecture) => (
                <>
                  <DraggableComponent element={lecture}/>
                </>
              ))}
          </>
          {courseStore.course &&
            <NewLecture order={courseStore.course.lectures.length+1}/>
          }
        </div>
      )}
    </Observer>
  );
}
