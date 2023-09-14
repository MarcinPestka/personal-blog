import { ICourse, ILecture } from "../models/course.model";
import { courseStore } from "../store/courseStore";
import { ApiAuthPost } from "./ApiService";

export async function AddNewCourse(course:ICourse) {
    await ApiAuthPost("Course/AddCourse", course).then((resp)=>{
        courseStore.courses.push(resp.data);
    });
}
