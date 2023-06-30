import { useEffect, useState } from "react";
import "../App.scss";
import { Grid } from "@mui/material";
import { sectionStore } from "../store/sectionStore";
import { BaseComponent } from "../components/BaseComponent";
import { IPost } from "../models/post.model";
import { Observer } from "mobx-react-lite";

// async function getPosts():IPost[] {
//   store
//   return
// }

export function HomePage() {
  const store = sectionStore;

  useEffect(() => {
    (async () => {
      await store.getAllSectionsAsync("0");
    })();
  }, []);

  return (
    <Observer>
      {() => (
        <>
          <Grid
            container
            spacing={0}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              {store.sections.map((section) => {
                return (
                  <div key={section.id}>
                    <BaseComponent {...section} />
                  </div>
                );
              })}
            </Grid>
          </Grid>
        </>
      )}
    </Observer>
  );
}
