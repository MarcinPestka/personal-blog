import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import { Observer } from "mobx-react-lite";
import { TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import { editingCourseStore } from "../../../store/editingSectionsStore";
import { addTopic } from "../../../services/TopicService";
import { addNewLecture } from "../../../services/LectureService";

export default function AddNewLectureComponent() {
    const [edit,setEdit] = React.useState(false);

    function handleFirstClick() {
        setEdit(true);
        editingCourseStore.newLecture.CourseId = 6; 
        editingCourseStore.newLecture.description = '6'; 
        editingCourseStore.newLecture.content = '6'; 
    }

    async function handleAddClick() {
      addNewLecture(editingCourseStore.newLecture);
    }

    function handleDeleteClick() {
        setEdit(false);
    }

  return (
    <Observer>
      {() => (
        <>
          <ListItemButton sx={{ pl: 4 }} onClick={() => handleFirstClick()}>
            {
            edit === false ? 
                <div> Add new lecture </div>:
                <>
                <TextField onChange={(e)=>{editingCourseStore.newLecture.title = e.target.value}}></TextField> 
                <AddIcon onClick={(e)=>{e.stopPropagation();handleAddClick();}}></AddIcon>
                <ClearIcon onClick={(e)=>{e.stopPropagation();handleDeleteClick()}}></ClearIcon>
                </>
            }
          </ListItemButton>
        </>
      )}
    </Observer>
  );
}

