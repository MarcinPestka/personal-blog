import { TextField } from "@mui/material";
import { useState } from "react";
import { courseStore } from "../../../store/courseStore";
import { ICourse } from "../../../models/course.model";
import { AddNewPost } from "../../../services/PostService";
import { IPost } from "../../../models/post.model";
import { sectionStore } from "../../../store/sectionStore";
import { userStore } from "../../../store/userStore";

export function NewPostTile() {
    const [adding,setAdd] = useState(false);

    function handleCourseAddClick(post:IPost) {
        post.authorId = 1;
        AddNewPost(post)
        setAdd(false);
    }

    return (
      <>
        {adding === false ?
        <p onClick={()=>{setAdd(true);courseStore.newCourse = {} as ICourse}}>Dodaj nowy kurs</p>
        :
        <>
            <TextField id="standard-basic" label="Title" variant="standard" onChange={(e)=>{sectionStore.newPost.title = e.target.value}}/><br/>
            <TextField id="standard-basic" label="Description" variant="standard" onChange={(e)=>{sectionStore.newPost.description = e.target.value}}/><br/>
            <button onClick={()=>handleCourseAddClick(sectionStore.newPost)}>Add new course</button>
        </>
        }
      </>
    );
  }
  