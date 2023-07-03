import { Box, Grid } from "@mui/material";
import { ICarouselItem } from "./CarouselComponent";
import { ICourse } from "../../models/course.model";
import img from "../../test/htmlcss.jpg";

export function CarouselTile(props:{course: ICourse, carouselId: number, dragStart:any, handleClick:any, index:number}) {
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
        onMouseDown={(e) => props.dragStart(e)}
        onClick={(e) => {
            props.handleClick(e);
        }}
      ></img>
      <h1 className={props.index === props.carouselId ? 'header Chosen' : 'header NotChosen'}>{props.course.title}</h1>
      <p className={props.index === props.carouselId ? 'Chosen' : 'NotChosen'}>{props.course.description}</p>
    </div>
    }
    </>

  );
}
