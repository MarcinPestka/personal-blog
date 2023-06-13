import "../App.scss";
import { Grid } from "@mui/material";
import sadEmoji from "../image/sadEmoji.svg";

export function NotFound() {
  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center">
        <Grid item>
          <img src={sadEmoji} alt="TellCodeSadEmoji" width="100px" />
        </Grid>
        <Grid item mt={6}>
          <p className="subTitle">This page does not exist!</p>
        </Grid>
      </Grid>
    </>
  );
}
