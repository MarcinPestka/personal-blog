import { Box, Grid } from "@mui/material";
import { ICourse } from "../../../models/course.model";
import img from "../../../image/htmlcss.jpg";
import { useNavigate } from "react-router-dom";

export function CarouselTile(props:{course: ICourse, carouselId: number, dragStart:any, index:number}) {
  const navigate = useNavigate();
  return (
    <>
    {props.course &&
    <div className={"item"} key={props.course.id} style={{textAlign:'center'}}>
      <img
        draggable={false}
        src={img}
        className={
          props.index === props.carouselId ? "carouselItem chosenItem" : "carouselItem"
        }
        onMouseDown={(e) => {props.dragStart(e)}}
        onClick={() => {
            navigate(`/course/${props.course.id}`);
        }}
      ></img>
      <h1 className={props.index === props.carouselId ? 'header Chosen' : 'header NotChosen'}>{props.course.title}</h1>
      <p className={props.index === props.carouselId ? 'Chosen' : 'NotChosen'}>{props.course.description}</p>
    </div>
    }
    </>

  );
}
