import { Observer } from "mobx-react-lite";
import { examStore } from "../../../store/examStore";

export default function ExamSideBar() {

    function handleClick() {
        examStore.StartExam();
        console.log("EXAM TIME");
    }

  return (
    <Observer>
      {() => (
        <>
        <p onClick={()=>handleClick()}>test</p>
        </>
      )}
    </Observer>
  );
}

