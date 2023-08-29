import { ILecture, ITopic } from "../models/course.model";
import { Courses } from "../routes/Courses";
import { courseStore } from "../store/courseStore";
import { ApiAuthDelete, ApiAuthPost } from "./ApiService";

export async function addNewLecture(lecture:ILecture) {
    await ApiAuthPost("Course/AddNewLecture",lecture).then((resp) =>{});
    await courseStore.getCourseById(courseStore.course.id);
}

export async function deleteLecture(lectureId:number) {
    await ApiAuthDelete(`Course/DeleteLecture?lectureId=${lectureId}`,"");
    await courseStore.getCourseById(courseStore.course.id);
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
  