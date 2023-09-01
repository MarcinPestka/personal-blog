import { ITopic } from "../../../models/course.model";
import { deleteTopic, editTopic } from "../../../services/TopicService";
import { courseStore } from "../../../store/courseStore";
import { editingCourseStore } from "../../../store/editingCourseStore";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DraggableComponent } from "../../Draggable/DraggableComponent";

interface prop {
    topic:ITopic;
    j:number;
}

export function TopicElement(props:prop) {

    function handleTopicClick(id: number): void {
        courseStore.setActiveTopicId(id);
    }
    
    async function handleTopicEdit(topic:ITopic) {
        editingCourseStore.newTopic = topic;
        editingCourseStore.editingTopic = true;
    }

    async function handleTopicDelete(topicId:number) {
        deleteTopic(topicId);
    }


    function dragOverElement() {
        editingCourseStore.dragTopic.order = props.topic.order;
    }

    function dragStart() {
        editingCourseStore.dragTopic = props.topic;
    }

    function dragEnd() {
        editTopic();
    }

  const component = (
    <>
    <div draggable="true" onDragStart={()=>dragStart()} onDragEnd={()=>dragEnd()} onDragOver={() => {dragOverElement()}} onClick={()=>handleTopicClick(props.topic.id)} className={courseStore.activeTopicId === props.topic.id ? "topicElement picked":"topicElement"} >
    <p>{(props.j)}.{(props.topic.order)} {props.topic.title}</p>
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

  return (<>
    <DraggableComponent {...{test:props.topic,component}}/>
  </>);
}
