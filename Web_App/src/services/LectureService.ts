import { ILecture, ITopic } from "../models/course.model";
import { Courses } from "../routes/Courses";
import { courseStore } from "../store/courseStore";
import { ApiAuthDelete, ApiAuthPost } from "./ApiService";

export async function addNewLecture(lecture:ILecture) {
    await ApiAuthPost("Lecture/AddNewLecture",lecture).then((response) =>{
      courseStore.course.lectures = response.data
    });
}

export async function deleteLecture(lectureId:number) {
    await ApiAuthDelete(`Lecture/DeleteLecture?lectureId=${lectureId}`,"").then((response) =>{
      courseStore.course.lectures = response.data
    });
  }

  
export function OrderLectures(lectures: ILecture[]) {
    lectures = lectures.sort((n1, n2) => {
      if (n1.lectureOrder == null || n1.lectureOrder > (n2.lectureOrder ?? Infinity)) {
        return 1;
      }
      return -1;
    });
    return lectures;
  }
  