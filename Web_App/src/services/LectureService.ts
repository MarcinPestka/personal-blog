import { ILecture, ITopic } from "../models/course.model";
import { courseStore } from "../store/courseStore";
import { ApiAuthDelete, ApiAuthPost } from "./ApiService";

export async function addNewLecture(lecture:ILecture) {
    await ApiAuthPost("Course/AddNewLecture",lecture).then((resp) =>{});
    await courseStore.getCourseById('6');
}

export async function deleteLecture(lectureId:number) {
    await ApiAuthDelete(`Course/DeleteLecture?lectureId=${lectureId}`,"");
    await courseStore.getCourseById('6');
  }