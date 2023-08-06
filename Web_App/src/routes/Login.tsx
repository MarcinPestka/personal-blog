import "../App.scss";
import { Button, Grid, Paper, TextField } from "@mui/material";
import sadEmoji from "../image/sadEmoji.svg";
import { userStore } from "../store/userStore";
import { useEffect, useRef, useState } from "react";
import { IUser } from "../models/User.model";

export function Login() {
  const store = userStore;
  const [userName,setUserName]=useState('');
  const [password,setPassword]=useState('');
  const user:IUser = new IUser(userName,password);

  return (
    <>
      <Grid container direction="column" alignItems="center">
        <Grid item mt={6}>
          <TextField id="standard-basic" label="Login" variant="standard" onChange={(userName) => setUserName(userName.target.value)}/>
        </Grid>
        <Grid item mt={2}>
          <TextField id="standard-basic" label="Hasło" variant="standard" onChange={(password) => setPassword(password.target.value)}/>
        </Grid>
        <Grid item mt={2}>
          <Button variant="outlined" onClick={() => {store.Login(user)}}>Zaloguj</Button>
        </Grid>
      </Grid>
    </>
  );
}
