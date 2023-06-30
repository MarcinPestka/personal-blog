import { Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export function FooterComponent() {
  return (
    <>
      <div id="footer">
        <a href="https://github.com/MarcinPestka" target="_blank">
          <Grid
            container
            spacing={3}
            justifyContent="center"
            textAlign="center"
          >
            <Grid item xs={12}>
              <p>Powered by Marcin Pestka</p>
            </Grid>
            <Grid item>
              <GitHubIcon></GitHubIcon>
            </Grid>

            <Grid item>
              <p>Check out my github</p>
            </Grid>
          </Grid>
        </a>
      </div>
    </>
  );
}
