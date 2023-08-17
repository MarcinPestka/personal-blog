import { Box, Grid } from "@mui/material";
import { ISection } from "../../../models/section.model";
import { editingCourseStore } from "../../../store/editingSectionsStore";
import { runInAction } from "mobx";
import { ApiAuthPut } from "../../../services/ApiService";

export function TitleNoImageComponent(props: ISection) {



  return (
    <>
    <div draggable={true} 
    onDragEnd={async ()=>{
      await ApiAuthPut("Course/EditSection", editingCourseStore.elementDragSection);
    }}
    onDragStart={()=>{
              runInAction(() => {
              editingCourseStore.elementDrag = true;
              editingCourseStore.elementDragSection = props;
              });
            }}>
      <Grid container alignItems="center">
          <Grid item>
            <p className="title">{props.title}</p>
            <p className="subTitle">{props.subTitle}</p>
          </Grid>
        </Grid>
    </div>
    </>
  );
}
