import * as React from "react";
import { Observer } from "mobx-react-lite";
import { editingCourseStore } from "../../../store/editingCourseStore";
import { courseStore } from "../../../store/courseStore";
import { TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import { ILecture, ITopic } from "../../../models/course.model";
import { addLecture, editLecture } from "../../../services/LectureService";

export default function NewLecture({order}: {order: number;}) {
  const [newLecture,setEdit] = React.useState(false);

  function clearEdit() {
    setEdit(false);
    editingCourseStore.editingLecture = false;
    editingCourseStore.newLecture = {} as ILecture;
  }

    function handleFirstClick() {
        setEdit(true);
        editingCourseStore.newLecture.CourseId = courseStore.course.id;
    }

    async function handleAddClick() {
      console.log(editingCourseStore.editingLecture);
      if (!editingCourseStore.editingLecture) {
        editingCourseStore.newLecture.order = order;
        addLecture(editingCourseStore.newLecture);
        setEdit(false); 
      }else{
        editingCourseStore.newLecture.order = order;
        editLecture(editingCourseStore.newLecture);
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
        {newLecture === false && editingCourseStore.editingLecture !== true ?
        <p onClick={()=>handleFirstClick()}>Add new lecture</p>
        :
        <div style={{display:'flex',alignItems:'center'}}>
            <TextField id="standard-basic" label="New lecture" variant="standard" value={editingCourseStore.newLecture.title} onChange={(e)=>{editingCourseStore.newLecture.title = e.target.value}}/>
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

