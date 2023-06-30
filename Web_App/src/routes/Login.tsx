import "../App.scss";
import { Button, Grid, Paper, TextField } from "@mui/material";
import sadEmoji from "../image/sadEmoji.svg";

export function Login() {
  return (
    <>
      <Grid container direction="column" alignItems="center">
        <Grid item mt={6}>
          <TextField id="standard-basic" label="Login" variant="standard" />
        </Grid>
        <Grid item mt={2}>
          <TextField id="standard-basic" label="Hasło" variant="standard" />
        </Grid>
        <Grid item mt={2}>
          <Button variant="outlined">Zaloguj</Button>
        </Grid>
      </Grid>
    </>
  );
}
