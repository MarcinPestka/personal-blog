import { ITopic } from "../../../models/course.model";
import { courseStore } from "../../../store/courseStore";

interface prop {
    topic:ITopic;
    j:number;
}

export function TopicElement(props:prop) {

    function handleTopicClick(id: number): void {
        courseStore.setActiveTopicId(id);
    }

  return (
    <>
        <p className={courseStore.activeTopicId === props.topic.id ? "picked":""} 
        onClick={()=>handleTopicClick(props.topic.id)}>{(props.j)}.{(props.topic.topicOrder)} {props.topic.title}</p>
    </>
  );
}
