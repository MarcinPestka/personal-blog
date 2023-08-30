import { Grid } from "@mui/material";
import { ISection } from "../../../models/section.model";

export function TitleNoImageComponent(props: ISection) {
  return (
    <Grid container alignItems="center">
      <Grid item>
        <p className="title">{props.title}</p>
        <p className="subTitle">{props.subTitle}</p>
      </Grid>
    </Grid>
  );
}
