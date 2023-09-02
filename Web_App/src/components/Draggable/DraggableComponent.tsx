import { ILecture, ITopic } from "../../models/course.model";
import { editLecture } from "../../services/LectureService";
import { editTopic } from "../../services/TopicService";
import { courseStore } from "../../store/courseStore";
import { editingCourseStore } from "../../store/editingCourseStore";
import { LectureElement } from "../CourseComponents/SideBar/LectureElement";
import { TopicElement } from "../CourseComponents/SideBar/TopicElement";

interface DraggableProps {
    test: ILecture | ITopic;
}


export function DraggableComponent(props: DraggableProps) {
    let component;
    function isLecture(element: ILecture | ITopic): element is ILecture {
        return "topics" in element;
    }

    function dragOverElement() {
        if (courseStore.activeLectureId !== props.test.id) {
            editingCourseStore.dragElement.order = props.test.order;
        }
    }

    function dragStart() {
        if (courseStore.activeLectureId !== props.test.id) {
            editingCourseStore.dragElement = props.test;
        }
    }

    function dragEnd() {
        if (!isLecture(props.test)) {
            editTopic();
        }else{
            if (courseStore.activeLectureId !== props.test.id) {
                editLecture();
            }
        }
    }

    if (isLecture(props.test)) {
        component = (<LectureElement lecture={props.test} />);
    }else{
        component = (<TopicElement topic={props.test} />);
    }

    return(
        <>
        <div draggable={true} onDragStart={()=>dragStart()} onDragEnd={()=>dragEnd()} onDragOver={() => {dragOverElement()}} >
            {component}
        </div>
        </>
        );
  
  }