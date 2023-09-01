import { ILecture, ITopic } from "../../models/course.model";
import { ISection } from "../../models/section.model";
import { editLecture } from "../../services/LectureService";
import { SectionTypeEnum } from "../../services/SectionService";
import { editTopic } from "../../services/TopicService";
import { courseStore } from "../../store/courseStore";
import { editingCourseStore } from "../../store/editingCourseStore";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface DraggableProps {
    test: ILecture | ITopic;
    component: React.ReactNode;
}


export function DraggableComponent(props: DraggableProps) {

    function dragOverElement() {
        editingCourseStore.dragElement.order = props.test.order;
    }

    function dragStart() {
        editingCourseStore.dragElement = props.test;
    }

    function dragEnd() {
        editTopic();
        editLecture();
    }

    return(
        <>
        <div draggable="true" onDragStart={()=>dragStart()} onDragEnd={()=>dragEnd()} onDragOver={() => {dragOverElement()}} >
            {props.component}
        </div>
        </>
        );
  
  }