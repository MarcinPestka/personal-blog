import { Section } from "../services/SectionService";
import { Grid } from "@mui/material";

export function TitleComponent(props2: Section) {
  return (
    <>
      <Grid container>
        <Grid item>
            <img alt="complex" src={props2.img} width="300px" />
        </Grid>
        <Grid item pl={3}>
          <h1 id="header">{props2.Header}</h1>
          <h2 id="header2">{props2.SubHeader}</h2>
          <p>{props2.Text}</p>
        </Grid>
      </Grid>
    </>
  );
}
