import { ICourse, ILecture } from "../models/course.model";
import { CheckedAnswears, IExam, IQuestion, IQuestionDTO } from "../models/exam.model";
import { courseStore } from "../store/courseStore";
import { examStore } from "../store/examStore";
import { ApiAuthPost } from "./ApiService";

export async function CheckAnswearsApi(CheckedAnswears:CheckedAnswears) {
    await ApiAuthPost("Exam/check", CheckedAnswears).then((resp)=>{
        console.log(resp.data);
    });
}

export async function AddNewQuestion() {

    const question: IQuestionDTO = {
        examId:examStore.exam!.id,
        questionText: "siiima",
      }

    await ApiAuthPost("Question", question).then((resp)=>{
        //console.log(resp.data);
        examStore.exam!.questions = resp.data;
    });
}

