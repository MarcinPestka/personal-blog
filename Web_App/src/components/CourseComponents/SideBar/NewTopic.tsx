import * as React from "react";
import { Observer } from "mobx-react-lite";
import { editingCourseStore } from "../../../store/editingCourseStore";
import { courseStore } from "../../../store/courseStore";
import { TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import { addTopic, editTopic } from "../../../services/TopicService";
import { ITopic } from "../../../models/course.model";

export default function AddNewTopicComponent({order}: {order: number;}) {
    const [newTopic,setEdit] = React.useState(false);

  function clearEdit() {
    setEdit(false);
    editingCourseStore.editingTopic = false;
    editingCourseStore.newTopic = {} as ITopic;
  }

    function handleFirstClick() {
        setEdit(true);
        editingCourseStore.newTopic.lectureId = courseStore.activeLectureId;
    }

    async function handleAddClick() {
      if (!editingCourseStore.editingTopic) {
        editingCourseStore.newTopic.order = order;
        addTopic(editingCourseStore.newTopic);
        setEdit(false); 
      }else{
        editTopic();
        clearEdit();
      }
    }

    function handleClearClick() {
        clearEdit();
    }

  return (
    <Observer>
      {() => (
        <>
        {newTopic === false && editingCourseStore.editingTopic !== true ?
        <p onClick={()=>handleFirstClick()}>Add new topic</p>
        :
        <div style={{display:'flex',alignItems:'center'}}>
            <TextField id="standard-basic" label="New lecture" variant="standard" value={editingCourseStore.newTopic.title} onChange={(e)=>{editingCourseStore.newTopic.title = e.target.value}}/>
            <div className="IconContainer">
            <AddIcon className="addIcon icon" onClick={() => handleAddClick()}></AddIcon>
            <ClearIcon className="deleteIcon icon" onClick={() => handleClearClick()}></ClearIcon>
            </div>
        </div>
        
        }
        </>
      )}
    </Observer>
  );
}

