import { Observer } from "mobx-react-lite";
import { useState } from "react";
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import { EditQuestion } from "../../services/ExamService";
import { examStore } from "../../store/examStore";

interface ITextEditorProps{
    text:string|undefined;
}

export function TextEditor(props: ITextEditorProps) {
    const [edit,SetEdit] = useState(false);
    const [textState,SetTextState] = useState(props.text);

    function handleBlur() {
        SetEdit(false);
        console.log(textState);
        console.log(props.text);
        if (textState !== props.text) {
            EditQuestion(textState!);
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
        <div className="editable">
            {edit ? 
                <>
                <input defaultValue={props.text} onChange={(e)=>SetTextState(e.target.value)} type="text" id="fname" name="fname" onBlur={()=>handleBlur()} autoFocus spellCheck="false"/>
                <div className="IconContainer" onClick={()=>handleEdit()}><DoneIcon className="addIcon icon"/></div> 
                <div className="IconContainer"  onClick={()=>handleDiscard()}><ClearIcon className="deleteIcon icon"/></div> 
                </> : 
                <><p onClick={()=>SetEdit(true)}>{props.text}</p>
                </>
            }
        </div>
        </>
      )}
    </Observer>
  );
}
