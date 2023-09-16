import { ITopic } from "../../../models/course.model";
import { deleteTopic } from "../../../services/TopicService";
import { courseStore } from "../../../store/courseStore";
import { editingCourseStore } from "../../../store/editingCourseStore";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { sectionStore } from "../../../store/sectionStore";
import CompletedCheckBox from "./CompletedTopicCheckBox";

interface prop {
    topic:ITopic;
}

export function TopicElement(props:prop) {

    function handleTopicClick(id: number): void {
        courseStore.setActiveTopicId(id);
        sectionStore.newSection.topicId = id;
    }
    
    async function handleTopicEdit(topic:ITopic) {
        editingCourseStore.newTopic = topic;
        editingCourseStore.editingTopic = true;
    }

    async function handleTopicDelete(topicId:number) {
        deleteTopic(topicId);
    }

  return (
    <>
    <div onClick={()=>handleTopicClick(props.topic.id)} className={courseStore.activeTopicId === props.topic.id ? "topicElement picked":"topicElement"} >
        {courseStore.activeCourse === true ?
        <CompletedCheckBox topicId={props.topic.id}/>:<></>
        }
        <p>{(1)}.{(props.topic.order)} {props.topic.title}</p>
        {editingCourseStore.editPage ?
        <div className="IconContainer">
            <EditIcon className="editIcon icon" onClick={() => handleTopicEdit(props.topic)}></EditIcon>
            <DeleteIcon className="deleteIcon icon" onClick={() => handleTopicDelete(props.topic.id)}></DeleteIcon>
        </div>
        :
        <></>
        }
    </div>
        
    </>
  );
}
