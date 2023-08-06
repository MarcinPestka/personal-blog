import { Box, Grid } from "@mui/material";
import { ISection } from "../../models/section.model";

export function TitleComponent(props: ISection) {
  return (
    <>
      <Grid container alignItems="center">
        <Grid item>
          <img
            alt="TellCodeLogo"
            src={'https://marcinpestka.netlify.app/static/media/logo_nav.ee109a8f57ef38bf35a2.png'}
            width="200px"
            className="logoSvg"
          />
        </Grid>
        <Grid item pl={7} mt={3}>
          <h1 id="header">{props.title}</h1>
          <h2 id="subHeader">{props.subTitle}</h2>
          <Box textAlign="center">
            <button className="CTAbutton">Sprawdź kurs</button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
