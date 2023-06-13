import { Grid } from "@mui/material";

export function FooterComponent() {
    return (
        <>
      <Grid
        container
        spacing={0}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item marginLeft="100px" marginRight="100px">
            <div id="footer">
                <p>test</p>
            </div>
        </Grid>
      </Grid>
        </>
    );
  }