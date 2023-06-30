import { Grid } from "@mui/material";
import { ISection } from "../../models/section.model";

export function TextComponent(props: ISection) {
  return (
    <>
      <Grid container>
        <Grid item xs={10}>
          <div className="lineBreakDisplay">{props.text}</div>
        </Grid>
      </Grid>
    </>
  );
}
