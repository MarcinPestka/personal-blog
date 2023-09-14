import { TextField } from "@mui/material";
import { useState } from "react";
import { courseStore } from "../../../store/courseStore";
import { ICourse } from "../../../models/course.model";
import { AddNewCourse } from "../../../services/CourseService";

export function NewCourseTile() {
    const [adding,setAdd] = useState(false);

    function handleCourseAddClick(course:ICourse) {
        AddNewCourse(course)
        setAdd(false);
    }

    return (
      <>
        {adding === false ?
        <p onClick={()=>{setAdd(true);courseStore.newCourse = {} as ICourse}}>Dodaj nowy kurs</p>
        :
        <>
            <TextField id="standard-basic" label="Title" variant="standard" onChange={(e)=>{courseStore.newCourse.title = e.target.value}}/><br/>
            <TextField id="standard-basic" label="Description" variant="standard" onChange={(e)=>{courseStore.newCourse.description = e.target.value}}/><br/>
            <TextField id="standard-basic" label="Content" variant="standard" onChange={(e)=>{courseStore.newCourse.content = e.target.value}}/><br/>
            <button onClick={()=>handleCourseAddClick(courseStore.newCourse)}>Add new course</button>
        </>
        }
      </>
    );
  }
  