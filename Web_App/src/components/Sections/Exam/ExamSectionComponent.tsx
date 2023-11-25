import { FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import { ExamAnswear, IExam } from "../../../models/exam.model";
import { useState } from "react";
import { examStore } from "../../../store/examStore";




export function ExamSection(props: IExam | undefined) {
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
    SetQuestionId(questionId);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetCurrentAnswearId((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={10}>
          <div className="lineBreakDisplay">
          <div className="indicators">
            {props!.questions.map((item, index) => {
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
            </div>
            <h1>{props!.questions.find(x=>x.id === questionId)!.questionText}</h1>
            <RadioGroup value={examStore.examAnswears.answearPairs.find(x=>x.questionId === questionId)?.userAnswear || ''} onChange={handleChange}>
            {props!.questions.find(x=>x.id === questionId)!.answears.map((ans)=>{
              return <FormControlLabel value={ans.id} control={<Radio />} label={ans.answearText} onChange={handleAnswearClick}/>;
            })}
              </RadioGroup>
              <button onClick={()=>examStore.checkAnswears()}>test</button>
            </div>
        </Grid>
      </Grid>
    </>
  );
}
