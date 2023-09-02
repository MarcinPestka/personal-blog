import { Observer } from "mobx-react-lite";
import { ILecture } from "../../../models/course.model";
import { courseStore } from "../../../store/courseStore";
import { editingCourseStore } from "../../../store/editingCourseStore";
import { TopicElement } from "./TopicElement";
import AddNewTopicComponent from "./NewTopic";
import { editLecture } from "../../../services/LectureService";
import { DraggableComponent } from "../../Draggable/DraggableComponent";

interface prop {
    lecture:ILecture;
}

export function LectureElement(props:prop) {
  function handleLectureClick(id:number) {
      courseStore.setActiveLectureId(id);
  }

  return (
    <Observer>
      {() => (
    <>
    <div draggable={false} className="lectureSideBarElement">
      <p className="lectureHeader" onClick={()=>handleLectureClick(props.lecture.id)}>{props.lecture.order}. {props.lecture.title}</p>
      <div className={courseStore.activeLectureId === props.lecture.id ? "collapsingElement": "collapsingElement collapsed"}>
        {props.lecture.topics.map((topic)=>(
          <>
          {editingCourseStore.newTopic.id === topic.id ?
          <AddNewTopicComponent order={topic.order}/>
          :  
          <DraggableComponent test={topic}/>
        }
          </>
        ))
        }
      <AddNewTopicComponent order={props.lecture.topics.length+1}/>
      </div>
  </div>
    </>
  )}
  </Observer>
  );
}
