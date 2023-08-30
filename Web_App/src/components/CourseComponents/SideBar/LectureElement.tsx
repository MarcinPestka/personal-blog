import { Observer } from "mobx-react-lite";
import { ILecture } from "../../../models/course.model";
import { courseStore } from "../../../store/courseStore";
import { editingCourseStore } from "../../../store/editingCourseStore";
import { TopicElement } from "./TopicElement";
import AddNewTopicComponent from "./NewTopic";
import { editLecture } from "../../../services/LectureService";

interface prop {
    lecture:ILecture;
    i:number;
}

export function LectureElement(props:prop) {
  function handleLectureClick(id:number) {
      courseStore.setActiveLectureId(id);
  }

  function dragOverElement() {
    editingCourseStore.dragLecture.lectureOrder = props.lecture.lectureOrder;
  }

  function dragStart() {
      editingCourseStore.dragLecture = props.lecture;
  }

  function dragEnd() {
      editLecture();
  }
  
  return (
    <Observer>
      {() => (
    <>
    <div className="lectureSideBarElement">
      <div draggable="true" onDragStart={()=>dragStart()} onDragEnd={()=>dragEnd()} onDragOver={() => {dragOverElement()}} key={props.lecture.id} >
      <p className="lectureHeader" onClick={()=>handleLectureClick(props.lecture.id)}>{props.lecture.lectureOrder}. {props.lecture.title}</p>
      <div className={courseStore.activeLectureId === props.lecture.id ? "collapsingElement": "collapsingElement collapsed"}>
        {props.lecture.topics.map((topic,j)=>(
          <>
          {editingCourseStore.newTopic.id === topic.id ?
          <AddNewTopicComponent order={topic.topicOrder}/>
          :  
          <TopicElement {...{topic,j:props.lecture.lectureOrder}}/>
        }
          </>
        ))
        }
      <AddNewTopicComponent order={props.lecture.topics.length+1}/>
      </div>
      </div>
  </div>
    </>
  )}
  </Observer>
  );
}
