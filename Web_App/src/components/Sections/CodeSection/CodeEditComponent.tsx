import { Grid, TextField } from "@mui/material";
import "highlight.js/styles/github.css";
import { editingCourseStore } from "../../../store/editingCourseStore";

export function CodeEditComponent() {
  return (
    <>
      <Grid container>
        <Grid item xs={10}>
            <TextField fullWidth multiline rows={5} defaultValue={editingCourseStore.editingSection ? editingCourseStore.editingSection.subTitle:""} onChange={(e) => {editingCourseStore.editingSection.subTitle = e.target.value}}/>
        </Grid>
      </Grid>
    </>
  );
}
