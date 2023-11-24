import { Autocomplete, Grid, TextField } from "@mui/material";
import "highlight.js/styles/github.css";
import { editingCourseStore } from "../../../store/editingCourseStore";
import { sectionStore } from "../../../store/sectionStore";

export function CodeEditComponent() {
  const options = ['csharp', 'javascript'];

  return (
    <>
      <Grid container>
        <Grid item xs={10}>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            sx={{ width: 300 }}
            value={sectionStore.newSection.text || null}
            onChange={(event,newValue)=>{sectionStore.newSection.text = newValue!}}
            renderInput={(params) => <TextField {...params} label="language" />}
          />
          <TextField fullWidth multiline rows={5} defaultValue={sectionStore.newSection ? sectionStore.newSection.subTitle:""} onChange={(e) => {sectionStore.newSection.subTitle = e.target.value}}/>
        </Grid>
      </Grid>
    </>
  );
}
