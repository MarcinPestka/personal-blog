import { ILecture, ITopic } from "../../models/course.model";
import { ISection } from "../../models/section.model";
import { editLecture } from "../../services/LectureService";
import { editSection } from "../../services/SectionService";
import { editTopic } from "../../services/TopicService";
import { courseStore } from "../../store/courseStore";
import { editingCourseStore } from "../../store/editingCourseStore";
import { BaseComponentWrapper } from "../BaseComponentWrapper";
import { LectureElement } from "../CourseComponents/SideBar/LectureElement";
import { TopicElement } from "../CourseComponents/SideBar/TopicElement";

interface DraggableProps {
    element: ILecture | ISection | ITopic;
}


export function DraggableComponent(props: DraggableProps) {
    let component;

    function isLecture(element: ILecture | ITopic | ISection): element is ILecture {
        return "topics" in element;
    }
    function isTopic(element: ILecture | ITopic | ISection): element is ITopic {
        return "sections" in element;
    }
    function isSection(element: ILecture | ITopic | ISection): element is ISection {
        return "sectionType" in element;
    }

    function dragOverElement() {
        if (courseStore.activeLectureId !== props.element.id) {
            editingCourseStore.dragElement.order = props.element.order;
        }
    }

    function dragStart() {
        if (courseStore.activeLectureId !== props.element.id) {
            editingCourseStore.dragElement = props.element;
        }
    }

    function dragEnd() {
        if (isSection(props.element)) {
            console.log("section");
            editSection();
            return;
        }
        if (!isLecture(props.element)) {
            editTopic();
        }else{
            if (courseStore.activeLectureId !== props.element.id) {
            editLecture();
            }
        }
    }

    if (isLecture(props.element)) {
        component = (<LectureElement lecture={props.element} />);
    }
    if (isTopic(props.element)) {
        component = (<TopicElement topic={props.element} />);
    }
    if (isSection(props.element)) {
        component = (<BaseComponentWrapper {...props.element} />);
    }

    return(
        <>
        <div draggable={editingCourseStore.editPage === true ? true:false} onDragStart={()=>dragStart()} onDragEnd={()=>dragEnd()} onDragOver={() => {dragOverElement()}} >
            {component}
        </div>
        </>
        );
  
  }