import { Box, Grid, TextField } from "@mui/material";
import { ISection } from "../../../models/section.model";
import { sectionStore } from "../../../store/sectionStore";
import { editingCourseStore } from "../../../store/editingSectionsStore";

export function TitleNoImageEditComponent() {
  return (
    <>
    <Grid container alignItems="center">
      <Grid item mt={1}>
          <TextField defaultValue={editingCourseStore.editingSection ? editingCourseStore.editingSection.title:""} id="header" label="Tytuł" variant="standard" placeholder="Tytuł" onChange={(e) => {editingCourseStore.editingSection.title = e.target.value}}/><br />
          <TextField defaultValue={editingCourseStore.editingSection ? editingCourseStore.editingSection.subTitle:""} id="subHeader" label="Tytuł" variant="standard" placeholder="Podtytuł" onChange={(e) => {editingCourseStore.editingSection.subTitle = e.target.value}}/>
      </Grid>
    </Grid>
    </>
  );
}
