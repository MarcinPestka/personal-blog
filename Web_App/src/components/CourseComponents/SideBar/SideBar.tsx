import { courseStore } from "../../../store/courseStore";
import { Observer } from "mobx-react-lite";
import { TopicElement } from "./TopicElement";
import { LectureElement } from "./LectureElement";

export default function NestedList() {
  return (
    <Observer>
      {() => (
        <div className="sideBarWrapper" style={{ maxWidth: "360px", minWidth: "360px" }}>
          <>
            {courseStore.course &&
              courseStore.course.lectures.map((lecture, i) => (
                <LectureElement {...{ lecture, i: lecture.id }} />
              ))}
          </>
        </div>
      )}
    </Observer>
  );
}
