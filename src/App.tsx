import React from "react";
import "./App.css";
import { SectionsRepository } from "./services/SectionService";
import { TitleComponent } from "./components/TitleComponent";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";

function App() {
  const test = useParams();
  console.log(test.id);
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item marginLeft='100px' marginRight='100px'>
          <TitleComponent {...SectionsRepository[1]}></TitleComponent>
          <TitleComponent {...SectionsRepository[1]}></TitleComponent>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
