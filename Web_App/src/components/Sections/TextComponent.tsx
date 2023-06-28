import { Grid } from "@mui/material";
import { ISection } from "../../models/section.model";

export function TextComponent(props: ISection) {
  return (
    <>
      <Grid container>
        <Grid item xs={10}>
        <p className="title">{props.title}</p>
          <p className="subTitle">{props.subTitle}</p>
        </Grid>
      </Grid>
    </>
  );
}
