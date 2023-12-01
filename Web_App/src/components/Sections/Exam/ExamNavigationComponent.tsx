import { FormControlLabel, Grid, Hidden, Radio, RadioGroup } from "@mui/material";
import { ExamAnswear, IExam } from "../../../models/exam.model";
import { useEffect, useState } from "react";
import { examStore } from "../../../store/examStore";
import { AddNewAnswear, AddNewQuestion } from "../../../services/ExamService";
import { TextEditor, TextEditorType } from "../../TextEditor/TextEditor";
import { Observer } from "mobx-react-lite";
import { editingCourseStore } from "../../../store/editingCourseStore";

enum navActionEnum {
    Next,
    Previous
}

enum questionStatusEnum {
    Done,
    NoAnswear,
    ToBeDone
}

export function ExamNavigation() {
  const [completedIds, SetCompletedIds] = useState<number[]>([]);

  useEffect(()=>{
    examStore.currentQuestionId = examStore.exam!.questions[0].id;
  },[])


  function handleNavigation(questionId:number) {
    examStore.examAnswears.answearPairs.push({questionId:examStore.currentQuestionId!,answearId:null})
    examStore.currentQuestionId = questionId;
    completedIds.push(questionId)
    SetCompletedIds(completedIds);
  }

  const addNewQuestion = async () => {
    await AddNewQuestion();
  };

  function handleNavigationButtonsClick(navAction: navActionEnum){
    completedIds.push(examStore.currentQuestionId!)
    SetCompletedIds(completedIds);

    examStore.examAnswears.answearPairs.push({questionId:examStore.currentQuestionId!,answearId:null})

    switch (navAction) {
        case navActionEnum.Next:
            examStore.currentQuestionId! = examStore.exam!.questions[examStore.exam!.questions.findIndex(x=>x.id === examStore.currentQuestionId)+1]!.id
            break;
        case navActionEnum.Previous:
            examStore.currentQuestionId! = examStore.exam!.questions[examStore.exam!.questions.findIndex(x=>x.id === examStore.currentQuestionId)-1]!.id
            break;
    }
  }

  function dotColor(status:number):string {
    if (examStore.examAnswears.answearPairs.find(x=>x.questionId === status && x.answearId !== null)) {
        return "green";
    }
    else if(examStore.examAnswears.answearPairs.find(x=>x.questionId === status && x.answearId === null)){
        return "yellow";
    }
    else{
        return "";
    }
  }

  return (
    <Observer>
      {() => (
    <>
          <div className="indicators">
            <button className="primaryButton"  style={!examStore.exam!.questions.findIndex(x=>x.id === examStore.currentQuestionId)?{visibility:'hidden'}:{}}  onClick={()=>handleNavigationButtonsClick(navActionEnum.Previous)}>Previous</button>
            <div className="indicators">
            {examStore.exam!.questions.map((item, index) => {
              return (
                <div
                  key={index}
                  className={item.id === examStore.currentQuestionId ? `dot selected ${dotColor(item.id)}` : `dot ${dotColor(item.id)}`}
                  onClick={() => {
                    handleNavigation(item.id);
                  }}
                ></div>
              );
            })}
            {editingCourseStore.editPage &&
            <div
            className={"dot selected"}
            style={{color:'white', cursor:'pointer'}}
            onClick={()=> addNewQuestion()}
            >+</div>
            }
            </div>
            <button className="primaryButton"  style={examStore.exam!.questions.findIndex(x=>x.id === examStore.currentQuestionId) === examStore.exam!.questions.length-1 ? {visibility:'hidden'}:{}} onClick={()=>handleNavigationButtonsClick(navActionEnum.Next)}>Next</button>
            </div>
    </>
      )}
    </Observer>
  );
}
