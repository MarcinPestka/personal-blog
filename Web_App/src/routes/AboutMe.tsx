import "../App.scss";
import { Grid } from "@mui/material";
import { GetAllSections } from "../services/SectionService";

export function AboutMe() {
  var sections = GetAllSections();
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <p>Page all about me :-)</p>
        </Grid>
      </Grid>
    </>
  );
}
