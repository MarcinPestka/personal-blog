import { ILecture, ITopic } from "../models/course.model";
import { Courses } from "../routes/Courses";
import { courseStore } from "../store/courseStore";
import { editingCourseStore } from "../store/editingCourseStore";
import { ApiAuthDelete, ApiAuthPost, ApiAuthPut } from "./ApiService";

export async function addLecture(lecture:ILecture) {
  await ApiAuthPost("Lecture/AddNewLecture", lecture).then((response) => {
    console.log(OrderLectures(response.data));
    courseStore.course.lectures = OrderLectures(response.data);
  });
}

export async function deleteLecture(lectureId:number) {
    await ApiAuthDelete(`Lecture/DeleteLecture?lectureId=${lectureId}`,"").then((response) =>{
      courseStore.course.lectures = OrderLectures(response.data);
    });
  }

  export async function editLecture(){
    await ApiAuthPut("Lecture/EditLecture",editingCourseStore.dragElement).then((response)=>{
      courseStore.course.lectures = OrderLectures(response.data);
    });
  }
  
export function OrderLectures(lectures: ILecture[]) {
    lectures = lectures.sort((n1, n2) => {
      if (n1.order == null || n1.order > (n2.order ?? Infinity)) {
        return 1;
      }
      return -1;
    });
    return lectures;
  }
  