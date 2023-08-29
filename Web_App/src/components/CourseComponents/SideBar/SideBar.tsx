import { courseStore } from "../../../store/courseStore";
import { Observer } from "mobx-react-lite";

export default function NestedList() {

  function handleTopicClick(id:number) {
    courseStore.setActiveTopicId(id);
  }

  function handleLectureClick(id:number) {
    courseStore.setActiveLectureId(id);
  }

  return (
    <Observer>
      {() => (
      <div style={{ borderStyle: "solid",maxWidth:'360px',minWidth:'360px' }}>
        <>
      {courseStore.course &&
      courseStore.course.lectures.map((lecture,i)=>(
        <div key={lecture.id} className="lectureSideBarElement" style={{ borderStyle: "solid", margin: "5px" }}>
          <h5 onClick={()=>handleLectureClick(lecture.id)}>{(i+1)}. {lecture.title}</h5>
          <div className={courseStore.activeLectureId === lecture.id ? "collapsingElement": "collapsingElement collapsed"}>
            {lecture.topics.map((topic,j)=>(
              <>
                <p className={courseStore.activeTopicId === topic.id ? "picked":""} onClick={()=>handleTopicClick(topic.id)}>{(i+1)}.{(j+1)} {topic.title}</p>
              </>
            ))
            }
          </div>
      </div>
      ))
    }
        </>
      </div>
      )}
    </Observer>
  );
}
