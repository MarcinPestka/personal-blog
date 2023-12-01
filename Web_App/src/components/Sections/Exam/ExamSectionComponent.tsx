import { Grid } from "@mui/material";
import { ExamAnswear } from "../../../models/exam.model";
import { useEffect, useState } from "react";
import { examStore } from "../../../store/examStore";
import { AddNewAnswear } from "../../../services/ExamService";
import { TextEditor, TextEditorType } from "../../TextEditor/TextEditor";
import { Observer } from "mobx-react-lite";
import { ExamNavigation } from "./ExamNavigationComponent";

export function ExamSection() {
  
  useEffect(()=>{
    examStore.currentQuestionId = examStore.exam?.questions[0].id;
  },[])

  const handleAnswearClick = ev => {
    const ans: ExamAnswear = {
      questionId: examStore.currentQuestionId!,
      answearId: Number(ev.target.value)
    }

    console.log(examStore.examAnswears);

    if (!examStore.examAnswears.answearPairs.find(x=>x.questionId == ans.questionId)) {
      console.log("new");
      examStore.examAnswears.answearPairs.push(ans)
    }else {
      let index = examStore.examAnswears.answearPairs.findIndex(x=>x.questionId == ans.questionId);
      console.log("Exist");
      examStore.examAnswears.answearPairs[index] = ans;
    }
  };

  function test() {
    if (examStore.examAnswears.answearPairs.find(x=>x.questionId === examStore.currentQuestionId) !== undefined) {
      examStore.examAnswears.answearPairs.find(x=>x.questionId === examStore.currentQuestionId)!.answearId = null;
    }

  }

  return (
    <Observer>
      {() => (
    <>
      <Grid container>
        <Grid item xs={10}>
          <div className="lineBreakDisplay">
          <ExamNavigation/>
            <TextEditor text={examStore.exam?.questions.find(x=>x.id === examStore.currentQuestionId)?.questionText} id={0} type={TextEditorType.question}/>
            <div>
            <form action="">
            
            {examStore.exam?.questions.find(x=>x.id === examStore.currentQuestionId)?.answears?.map((ans)=>{
              return (
              <>
              <div style={{display:"flex",paddingTop:'10px'}}>
              <input type="radio" id="age1" name="age" value={ans.id} checked={ans.id == examStore.examAnswears.answearPairs.find(x=>x.questionId === examStore.currentQuestionId)?.answearId} onChange={(e)=>{console.log(e.target.value);handleAnswearClick(e)}}/>
              <TextEditor text={ans.answearText} id={ans.id} type={TextEditorType.answear}></TextEditor>
              </div>
              </>
              
              );
            })}
              </form>
              <p className="smallFont margin-s grey underline" style={{cursor:'pointer',visibility:examStore.examAnswears.answearPairs.find(x=> x.questionId === examStore.currentQuestionId) === undefined || examStore.examAnswears.answearPairs.find(x=> x.questionId === examStore.currentQuestionId)!.answearId === null ? 'hidden':'visible'}} onClick={()=>test()}>Wyczyść odpowiedź</p>
            </div>
              <button className="primaryButton" onClick={()=>AddNewAnswear()}>Add new answear</button>
            </div>
        </Grid>
      </Grid>
    </>
      )}
    </Observer>
  );
}
