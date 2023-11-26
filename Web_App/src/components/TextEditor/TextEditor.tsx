import { Observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import { EditAnswear, EditQuestion } from "../../services/ExamService";

export enum TextEditorType {
  question,
  answear
}

interface ITextEditorProps{
    text:string|undefined;
    id:number;
    type:TextEditorType;
}

export function TextEditor(props: ITextEditorProps) {
    const [edit,SetEdit] = useState(false);
    const [textState,SetTextState] = useState(props.text);
    const [answearId,SetAnswearId] = useState(0);

    useEffect(()=>{
      SetTextState(props.text);
    },[props])

    function handleBlur() {
        SetEdit(false);
        switch (props.type) {
          case TextEditorType.answear:
            EditAnswear(textState!,answearId);
            break;
          case TextEditorType.question:
            EditQuestion(textState!);
            break;
          default:
            break;
        }
    }

    function handleEdit(): void {
        SetEdit(false);
        EditQuestion(textState!);
    }

    function handleDiscard(): void {
      SetEdit(false);
    }

  return (
    <Observer>
      {() => (
        <>
        <div className={`editable ${props.type ? 'small' : 'large'}`}>
            {edit ? 
                <>
                <input defaultValue={props.text} onChange={(e)=>SetTextState(e.target.value)} type="text" id="fname" name="fname" onBlur={()=>handleBlur()} autoFocus spellCheck="false"/>
                <div className="IconContainer" onClick={()=>handleEdit()}><DoneIcon className="addIcon icon"/></div> 
                <div className="IconContainer"  onMouseDown={(e)=>{e.stopPropagation();handleDiscard()}}><ClearIcon className="deleteIcon icon"/></div> 
                </> : 
                <><p onClick={()=>{SetEdit(true);SetAnswearId(props.id)}}>{props.text}</p>
                </>
            }
        </div>
        </>
      )}
    </Observer>
  );
}
