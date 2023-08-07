import "../App.scss";
import { Grid } from "@mui/material";
import sadEmoji from "../image/sadEmoji.svg";
import { userStore } from "../store/userStore";
import { useEffect } from "react";
import { Observer } from "mobx-react-lite";

export function MyAccount() {
  const store = userStore;

  return (
    <Observer>
      {() => (
        <>
      <Grid container direction="column" alignItems="center">
        <Grid item mt={6}>
          {store.user &&
            <p className="subTitle">{store.user.firstName} {store.user.lastName}</p>
          }
        </Grid>
      </Grid>
        </>
      )}
    </Observer>
  );
}
