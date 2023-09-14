import { Observer } from "mobx-react-lite";
import { ILecture } from "../../../models/course.model";
import { courseStore } from "../../../store/courseStore";
import { editingCourseStore } from "../../../store/editingCourseStore";
import AddNewTopicComponent from "./NewTopic";
import { DraggableComponent } from "../../Draggable/DraggableComponent";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteLecture } from "../../../services/LectureService";
import NewLecture from "./NewLecture";

interface prop {
    lecture:ILecture;
}

export function LectureElement(props:prop) {

  function handleLectureClick(id:number) {
    if (courseStore.activeLectureId === id) {
      courseStore.setActiveLectureId(0);
    }
    else{
      courseStore.setActiveLectureId(id);
    }
  }

  async function handleLectureEdit(lecture:ILecture) {
    editingCourseStore.newLecture = lecture;
    editingCourseStore.editingLecture = true;
  }

  async function handleLectureDelete(lectureId:number) {
      deleteLecture(lectureId);
  }

  return (
    <Observer>
      {() => (
    <>
    <div className="lectureSideBarElement">
      <div className="test" onClick={()=>handleLectureClick(props.lecture.id)}>
        {editingCourseStore.newLecture.id === props.lecture.id ?
        <>
            <NewLecture order={props.lecture.order}/>
        </>
        : 
        <>
          <p className="lectureHeader" >{editingCourseStore.dragging !== true ? props.lecture.order:"."}. {props.lecture.title}</p>
          {editingCourseStore.editPage ?
            <>
            <div className="IconContainer">
            <EditIcon className="editIcon icon" onClick={() => handleLectureEdit(props.lecture)}></EditIcon>
            <DeleteIcon className="deleteIcon icon" onClick={() => handleLectureDelete(props.lecture.id)}></DeleteIcon>
            </div>
            </>
            :
            <></>
            }
        </> 
        }
        
      </div>
      <div className={courseStore.activeLectureId === props.lecture.id ? "collapsingElement": "collapsingElement collapsed"}>
        {props.lecture.topics.map((topic)=>(
          <>
          {editingCourseStore.newTopic.id === topic.id ?
          <AddNewTopicComponent order={topic.order}/>
          :  
          <DraggableComponent element={topic}/>
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
