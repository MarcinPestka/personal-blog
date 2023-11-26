import { FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import { ExamAnswear, IExam } from "../../../models/exam.model";
import { useState } from "react";
import { examStore } from "../../../store/examStore";
import { AddNewQuestion } from "../../../services/ExamService";
import { TextEditor } from "../../TextEditor/TextEditor";
import { Observer } from "mobx-react-lite";




export function ExamSection() {
  const [questionId, SetQuestionId] = useState(1);
  const [currnetAnswearId, SetCurrentAnswearId] = useState('');
  
  const handleAnswearClick = ev => {
    const ans: ExamAnswear = {
      questionId: questionId,
      userAnswear: ev.target.value
    }

    if (!examStore.examAnswears.answearPairs.find(x=>x.questionId === ans.questionId)) {
      examStore.examAnswears.answearPairs.push(ans)
    }else {
      let index = examStore.examAnswears.answearPairs.findIndex(x=>x.questionId === ans.questionId);
      examStore.examAnswears.answearPairs[index] = ans;
    }
  };

  function handleNavigation(questionId:number) {
    examStore.currentQuestionId = questionId;
    SetQuestionId(questionId);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetCurrentAnswearId((event.target as HTMLInputElement).value);
  };

  const addNewQuestion = async () => {
    await AddNewQuestion();
  };

  return (
    <Observer>
      {() => (
    <>
      <Grid container>
        <Grid item xs={10}>
          <div className="lineBreakDisplay">
          <div className="indicators">
            {examStore.exam!.questions.map((item, index) => {
              return (
                <div
                  key={index}
                  className={item.id === questionId ? "dot selected" : "dot"}
                  onClick={() => {
                    handleNavigation(item.id);
                  }}
                ></div>
              );
            })}
            <div
              className={"dot selected"}
              style={{color:'white', cursor:'pointer'}}
              onClick={()=> addNewQuestion()}
            >+</div>
            </div>
            <TextEditor text={examStore.exam?.questions.find(x=>x.id === questionId)?.questionText}/>
            <RadioGroup value={examStore.examAnswears.answearPairs.find(x=>x.questionId === questionId)?.userAnswear || ''} onChange={handleChange}>
            {examStore.exam?.questions.find(x=>x.id === questionId)?.answears?.map((ans)=>{
              return <FormControlLabel value={ans.id} control={<Radio />} label={ans.answearText} onChange={handleAnswearClick}/>;
            })}
              </RadioGroup>
              <button onClick={()=>examStore.checkAnswears()}>test</button>
            </div>
        </Grid>
      </Grid>
    </>
      )}
    </Observer>
  );
}
