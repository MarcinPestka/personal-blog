import { Box, Grid, TextField } from "@mui/material";
import { sectionStore } from "../../../store/sectionStore";
import { useEffect } from "react";
import { courseStore } from "../../../store/courseStore";
import { editingCourseStore } from "../../../store/editingCourseStore";

export function TitleEditComponent() {
  
  useEffect(() => {
      sectionStore.newSection.topicId = courseStore.activeTopicId;
  }, []);

  return (
    <>
      <Grid container alignItems="center">
        <Grid item>
          <img
            alt="TellCodeLogo"
            src={'https://marcinpestka.netlify.app/static/media/logo_nav.ee109a8f57ef38bf35a2.png'}
            //src={"props.imageName"}
            width="200px"
            className="logoSvg"
          />
        </Grid>
        <Grid item mt={1}>
          <TextField id="header" label="Tytuł" variant="standard" placeholder="Tytuł" onChange={(e) => {editingCourseStore.editingSection.title = e.target.value}}/><br />
          <TextField id="subHeader" label="Tytuł" variant="standard" placeholder="Podtytuł" onChange={(e) => {editingCourseStore.editingSection.subTitle = e.target.value}}/>
          <Box textAlign="center">
            <button className="CTAbutton">Sprawdź kurs</button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
