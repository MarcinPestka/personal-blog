import { Observer } from "mobx-react-lite";
import { ITopic } from "../../../models/course.model";
import { courseStore } from "../../../store/courseStore";

export default function TopicCompletionIndicator(props:{topics:ITopic[]}) {
  return (
    <Observer>
      {() => (
        <div className="TopicsIndicatorContainer">
            {props.topics.map((topic)=>(
                <div className={!!courseStore.completedTopicsId.find(x=>x === topic.id) ? "TopicsIndicator completed" : "TopicsIndicator"}></div>
            ))
            }
        </div>
      )}
    </Observer>
  );
}
