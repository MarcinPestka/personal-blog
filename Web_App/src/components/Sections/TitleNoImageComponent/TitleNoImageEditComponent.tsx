import { Box, Grid, TextField } from "@mui/material";
import { ISection } from "../../../models/section.model";
import { sectionStore } from "../../../store/sectionStore";
import { editingCourseStore } from "../../../store/editingCourseStore";

export function TitleNoImageEditComponent() {
  return (
    <>
    <Grid container alignItems="center">
      <Grid item mt={1}>
          <TextField defaultValue={sectionStore.newSection ? sectionStore.newSection.title:""} id="header" label="Tytuł" variant="standard" placeholder="Tytuł" onChange={(e) => {sectionStore.newSection.title = e.target.value}}/><br />
          <TextField defaultValue={sectionStore.newSection ? sectionStore.newSection.subTitle:""} id="subHeader" label="Tytuł" variant="standard" placeholder="Podtytuł" onChange={(e) => {sectionStore.newSection.subTitle = e.target.value}}/>
      </Grid>
    </Grid>
    </>
  );
}
