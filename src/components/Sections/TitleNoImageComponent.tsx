import { Section } from "../../services/SectionService";
import { Box, Grid } from "@mui/material";

export function TitleNoImageComponent(props: Section) {
  return (
    <>
      <Grid container alignItems="center">
        <Grid item>
          <p className="title">{props.Header}</p>
          <p className="subTitle">{props.SubHeader}</p>
        </Grid>
      </Grid>
    </>
  );
}
