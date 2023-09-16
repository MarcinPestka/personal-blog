import { Observer } from "mobx-react-lite";
import { ITopic } from "../../../models/course.model";
import { courseStore } from "../../../store/courseStore";
import { useEffect, useState } from "react";

export default function TopicCompletionIndicator(props:{topics:ITopic[]}) {
    return (
    <Observer>
      {() => (
        <>
        {props.topics.length <= 6 ?
        <div className="TopicsIndicatorContainer">
            {props.topics.map((topic)=>(
                <div className={!!courseStore.completedTopicsId.find(x=>x === topic.id) ? "TopicsIndicator completed" : "TopicsIndicator"}></div>
            ))
            }
        </div>
        :
        <div className="TopicsIndicatorContainer">
            <div className="TopicsIndicatorProgressionBar">
                <div className="TopicsIndicatorProgressionBarInner" style={{width:`${Math.round(props.topics.filter(x=> courseStore.completedTopicsId.includes(x.id)).length/props.topics.length*100)}%`}}>
                </div>
            </div>
            <span>{Math.round(props.topics.filter(x=> courseStore.completedTopicsId.includes(x.id)).length/props.topics.length*100)}%</span>
        </div>
        }
        </>

      )}
    </Observer>
  );
}
