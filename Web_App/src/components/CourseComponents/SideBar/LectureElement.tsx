import { Observer } from "mobx-react-lite";
import { ILecture } from "../../../models/course.model";
import { courseStore } from "../../../store/courseStore";
import { editingCourseStore } from "../../../store/editingCourseStore";
import { TopicElement } from "./TopicElement";
import AddNewTopicComponent from "./NewTopic";

interface prop {
    lecture:ILecture;
    i:number;
}

export function LectureElement(props:prop) {
  function handleLectureClick(id:number) {
      courseStore.setActiveLectureId(id);
  }


  
  return (
    <Observer>
      {() => (
    <>
    <div key={props.lecture.id} className="lectureSideBarElement">
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
    </>
  )}
  </Observer>
  );
}
