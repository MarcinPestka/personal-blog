import React from "react";
import "../App.scss";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { TitleComponent } from "../components/Sections/TitleComponent";
import { SectionsRepository } from "../services/SectionService";

export function HomePage() {
  const test = useParams();
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <TitleComponent {...SectionsRepository[0]}></TitleComponent>
        </Grid>
      </Grid>
    </>
  );
}