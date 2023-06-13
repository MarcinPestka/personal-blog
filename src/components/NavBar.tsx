import { Grid } from "@mui/material";

export function NavBarComponent() {
  return (
    <>
    <Grid container textAlign="center" marginBottom={13}>
        <Grid item xs>
          <p>TellCode</p>
        </Grid>
        <Grid item xs={6}>
          <p>Home</p>
        </Grid>
        <Grid item xs>
          <p>About me</p>
        </Grid>
      </Grid>
    </>
  );
}