import { FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import { IExam } from "../../../models/exam.model";
import { useState } from "react";

interface ExamAnswear{
  questionId: number;
  answear:number;
}


export function ExamSection(props: IExam | undefined) {
  const [questionId, SetQuestionId] = useState(1);
  const [currnetAnswearId, SetCurrentAnswearId] = useState('');
  const [examAnswears, SetExamAnswears] = useState<ExamAnswear[]>([]);
  
  const handleAnswearClick = ev => {
    const ans: ExamAnswear = {
      questionId: questionId,
      answear: ev.target.value
    }

    if (!examAnswears.find(x=>x.questionId === ans.questionId)) {
      examAnswears.push(ans)
    }else {
      let index = examAnswears.findIndex(x=>x.questionId === ans.questionId);
      examAnswears[index] = ans;
    }

    SetExamAnswears(examAnswears);
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
            <RadioGroup value={examAnswears.find(x=>x.questionId === questionId)?.answear || ''} onChange={handleChange}>
            {props!.questions.find(x=>x.id === questionId)!.answears.map((ans)=>{
              return <FormControlLabel value={ans.id} control={<Radio />} label={ans.answearText} onChange={handleAnswearClick}/>;
            })}
              </RadioGroup>
            </div>
        </Grid>
      </Grid>
    </>
  );
}
