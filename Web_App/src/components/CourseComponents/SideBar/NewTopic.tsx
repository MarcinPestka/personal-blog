import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import { Observer } from "mobx-react-lite";
import { TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import { courseStore } from "../../../store/courseStore";
import { EditingCourseStore, editingCourseStore } from "../../../store/editingSectionsStore";
import { ApiAuthPost } from "../../../services/ApiService";
import { addTopic } from "../../../services/TopicService";

export default function AddNewTopicComponent() {
    const [edit,setEdit] = React.useState(false);

    function handleFirstClick() {
        setEdit(true);
        editingCourseStore.newTopic.LectureId = courseStore.lectureId; 
    }

    async function handleAddClick() {
      addTopic(editingCourseStore.newTopic);
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
                <div> Add new topic </div>:
                <>
                <TextField onChange={(e)=>{editingCourseStore.newTopic.title = e.target.value}}></TextField> 
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

