import { Grid, TextField } from "@mui/material";
import { sectionStore } from "../../../store/sectionStore";

export function TextEditComponent() {
  return (
    <>
      <Grid container>
        <Grid item xs={10}>
          <TextField fullWidth multiline rows={5} defaultValue={sectionStore.newSection ? sectionStore.newSection.text:""} onChange={(e) => {sectionStore.newSection.text = e.target.value}}/>
        </Grid>
      </Grid>
    </>
  );
}
