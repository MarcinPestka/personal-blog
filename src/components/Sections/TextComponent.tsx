import { Grid } from "@mui/material";
import { Section } from "../../services/SectionService";

export function TextComponent(props: Section) {
  return (
    <>
      <Grid container>
        <Grid item xs={10}>
          <p>{props.Text}</p>
        </Grid>
      </Grid>
    </>
  );
}
