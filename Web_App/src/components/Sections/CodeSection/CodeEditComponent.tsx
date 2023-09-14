import { Grid, TextField } from "@mui/material";
import "highlight.js/styles/github.css";
import { editingCourseStore } from "../../../store/editingCourseStore";
import { sectionStore } from "../../../store/sectionStore";

export function CodeEditComponent() {
  return (
    <>
      <Grid container>
        <Grid item xs={10}>
            <TextField fullWidth multiline rows={5} defaultValue={sectionStore.newSection ? sectionStore.newSection.subTitle:""} onChange={(e) => {sectionStore.newSection.subTitle = e.target.value}}/>
        </Grid>
      </Grid>
    </>
  );
}
