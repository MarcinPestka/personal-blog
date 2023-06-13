import { Box, Grid } from "@mui/material";
import tellCodeLogo from "../../image/TellCodeLogo.svg";

export function NavBarComponent() {
  const path = window.location.pathname;
  return (
    <Grid container marginBottom={13} alignItems="center" p="25px">
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
            <a href="/" className={path === '/' ? 'activeNavItem' : ''}>Home</a>
          </Grid>
          <Grid item pr="90px">
            <a href="/posts" className={path === '/posts' ? 'activeNavItem' : ''}>Posts</a>
          </Grid>
          <Grid item pr="20px">
            <a href="/about" className={path === '/about' ? 'activeNavItem' : ''}>About me</a>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs>
        <Box display="flex" justifyContent="flex-end">
          <p>Zaloguj</p>
        </Box>
      </Grid>
    </Grid>
  );
}