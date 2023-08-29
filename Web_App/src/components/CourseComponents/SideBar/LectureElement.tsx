import { ILecture } from "../../../models/course.model";
import { courseStore } from "../../../store/courseStore";
import { TopicElement } from "./TopicElement";

interface prop {
    lecture:ILecture;
    i:number;
}

export function LectureElement(props:prop) {
    function handleLectureClick(id:number) {
        courseStore.setActiveLectureId(id);
      }

      return (
        <>
        <div key={props.lecture.id} className="lectureSideBarElement" style={{ borderStyle: "solid", margin: "5px" }}>
          <h5 onClick={()=>handleLectureClick(props.lecture.id)}>{props.lecture.lectureOrder}. {props.lecture.title}</h5>
          <div className={courseStore.activeLectureId === props.lecture.id ? "collapsingElement": "collapsingElement collapsed"}>
            {props.lecture.topics.map((topic,j)=>(
              <>
                <TopicElement {...{topic,j:props.lecture.lectureOrder}}/>
              </>
            ))
            }
          </div>
      </div>
        </>
      );
}
