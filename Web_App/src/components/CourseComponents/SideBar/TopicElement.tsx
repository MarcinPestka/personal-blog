import { ITopic } from "../../../models/course.model";
import { deleteTopic } from "../../../services/TopicService";
import { courseStore } from "../../../store/courseStore";
import { editingCourseStore } from "../../../store/editingSectionsStore";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
interface prop {
    topic:ITopic;
    j:number;
}

export function TopicElement(props:prop) {

    function handleTopicClick(id: number): void {
        courseStore.setActiveTopicId(id);
    }
    
    async function handleTopicEdit(topicId:number) {
        
    }

    async function handleTopicDelete(topicId:number) {
        deleteTopic(topicId);
    }

  return (
    <>
    <div onClick={()=>handleTopicClick(props.topic.id)} className={courseStore.activeTopicId === props.topic.id ? "topicElement picked":"topicElement"} >
    <p>{(props.j)}.{(props.topic.topicOrder)} {props.topic.title}</p>
        {editingCourseStore.editPage ?
        <>
        <div className="IconContainer">
            <EditIcon className="editIcon" onClick={() => handleTopicEdit(props.topic.id)}></EditIcon>
            <DeleteIcon className="deleteIcon" onClick={() => handleTopicDelete(props.topic.id)}></DeleteIcon>
        </div>
        </>
        :
        <></>}
    </div>
        
    </>
  );
}
