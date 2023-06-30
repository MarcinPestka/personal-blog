import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import tellCodeLogo from "../../image/TellCodeLogo.svg";
import { useParams } from "react-router-dom";

export function NavBarComponent() {
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <Grid container marginBottom={3} alignItems="center" p="25px">
      <Grid item xs>
        <a href="/">
          <Grid container alignItems="center">
            <Grid item>
              <Box display="flex" justifyContent="flex-end">
                <img src={tellCodeLogo} alt="TellCodeLogo" width="40px" />
              </Box>
            </Grid>
            <Grid item pl={2}>
              <h4>TellCode</h4>
            </Grid>
          </Grid>
        </a>
      </Grid>
      <Grid item xs={8} pl={5}>
        <Grid container alignItems="center">
          <Grid item pr="90px">
            <a
              href="/"
              onClick={() => setHash(hash)}
              className={hash === "/" ? "activeNavItem" : ""}
            >
              Home
            </a>
          </Grid>
          <Grid item pr="90px">
            <a
              href="/posts"
              onClick={() => setHash(hash)}
              className={hash === "/posts" ? "activeNavItem" : ""}
            >
              Posts
            </a>
          </Grid>
          <Grid item pr="20px">
            <a
              href="/courses"
              onClick={() => setHash(hash)}
              className={hash === "/courses" ? "activeNavItem" : ""}
            >
              Courses
            </a>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs>
        <Box display="flex" justifyContent="flex-end">
          <a
            href="/login"
            onClick={() => setHash(hash)}
            className={hash === "/login" ? "activeNavItem" : ""}
          >
            Zaloguj
          </a>
        </Box>
      </Grid>
    </Grid>
  );
}
