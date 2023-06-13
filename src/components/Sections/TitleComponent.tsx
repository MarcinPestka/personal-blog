import { Section } from "../../services/SectionService";
import { Box, Grid } from "@mui/material";

export function TitleComponent(props: Section) {
  return (
    <>
      <Grid container alignItems="center">
        <Grid item>
          <img alt="TellCodeLogo" src={props.img} width="200px" className="logoSvg" />
        </Grid>
        <Grid item pl={7} mt={3}>
          <h1 id="header">{props.Header}</h1>
          <h2 id="subHeader">{props.SubHeader}</h2>
          <Box textAlign="center">
            <button className="CTAbutton">Sprawdź kurs</button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
