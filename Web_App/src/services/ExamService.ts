import { ICourse, ILecture } from "../models/course.model";
import { CheckedAnswears, IExam, IQuestion, IQuestionDTO } from "../models/exam.model";
import { courseStore } from "../store/courseStore";
import { examStore } from "../store/examStore";
import { ApiAuthPost, ApiAuthPut } from "./ApiService";

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
        examStore.exam!.questions = resp.data;
    });
}

export async function AddNewAnswear() {
    await ApiAuthPost("Answear", {questionId:examStore.currentQuestionId, answearText: "Answear" }).then((resp)=>{
        examStore.exam!.questions.find(x=>x.id===examStore.currentQuestionId)!.answears!.push(resp.data);
    });
}

export async function EditQuestion(newQuestionText: string) {
    const question: IQuestionDTO = {
        id:examStore.currentQuestionId,
        questionText: newQuestionText
    }

    await ApiAuthPut("Question", question).then(()=>{});
    examStore.exam!.questions.find(x=>x.id === examStore.currentQuestionId)!.questionText = newQuestionText;
}

export async function EditAnswear(newAnswearText: string, id: number) {
    await ApiAuthPut("Answear", {answearText:newAnswearText,id:id}).then(()=>{});
    examStore.exam!.questions.find(x=>x.id === examStore.currentQuestionId)!.answears!.find(x=>x.id === id)!.answearText = newAnswearText;
}