import { Grid } from "@mui/material";
import { Section } from "../services/SectionService";

export function TextComponent(props2: Section) {
  return (
    <>
      <Grid container>
        <Grid item>
          <h1 id="header">{props2.Header}</h1>
        </Grid>
      </Grid>
    </>
  );
}
