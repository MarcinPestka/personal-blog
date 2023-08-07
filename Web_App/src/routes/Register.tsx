import "../App.scss";
import { Button, Grid, Paper, TextField } from "@mui/material";
import sadEmoji from "../image/sadEmoji.svg";
import { userStore } from "../store/userStore";
import { useEffect, useRef, useState } from "react";
import { User } from "../models/User.model";

export function Register() {
  const store = userStore;
  const [userName,setUserName]=useState('');
  const [password,setPassword]=useState('');
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const user:User = new User(userName,password,firstName,lastName);

  return (
    <>
      <Grid container direction="column" alignItems="center">
        <Grid item mt={6}>
          <TextField id="standard-basic" label="Imie" variant="standard" onChange={(firstName) => setFirstName(firstName.target.value)}/>
        </Grid>
        <Grid item mt={2}>
          <TextField id="standard-basic" label="Nazwisko" variant="standard" onChange={(lastName) => setLastName(lastName.target.value)}/>
        </Grid>
        <Grid item mt={2}>
          <TextField id="standard-basic" label="Nazwa Użytkownika" variant="standard" onChange={(userName) => setUserName(userName.target.value)}/>
        </Grid>
        <Grid item mt={2}>
          <TextField id="standard-basic" label="Hasło" variant="standard" onChange={(password) => setPassword(password.target.value)}/>
        </Grid>
        <Grid item mt={2}>
          <Button variant="outlined" onClick={() => {store.Register(user)}}>Zaloguj</Button>
        </Grid>
      </Grid>
    </>
  );
}
