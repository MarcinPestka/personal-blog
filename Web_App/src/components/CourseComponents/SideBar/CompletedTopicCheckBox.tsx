import { Observer } from "mobx-react-lite";
import { courseStore } from "../../../store/courseStore";

export default function CompletedCheckBox(props:{topicId:number}) {    

    function handleClick(): void {
        courseStore.HandleTopicCompletion(props.topicId,courseStore.activeCourseId);
    }

  return (
    <Observer>
      {() => (
        <input type="checkbox" checked={!!courseStore.completedTopicsId.find(x=> x === props.topicId)} onChange={e => {}} onClick={()=>handleClick()}  />
      )}
    </Observer>
  );
}
