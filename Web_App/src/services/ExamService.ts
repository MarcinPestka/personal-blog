import { ICourse, ILecture } from "../models/course.model";
import { CheckedAnswears } from "../models/exam.model";
import { courseStore } from "../store/courseStore";
import { ApiAuthPost } from "./ApiService";

export async function CheckAnswearsApi(CheckedAnswears:CheckedAnswears) {
    await ApiAuthPost("Exam/check", CheckedAnswears).then((resp)=>{
        console.log(resp.data);
    });
}
