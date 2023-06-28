import { useEffect, useState } from "react";
import "../App.scss";
import { Grid } from "@mui/material";
import { sectionStore } from "../store/sectionStore";
import { BaseComponent } from "../components/BaseComponent";
import { ISection } from "../models/section.model";

export function HomePage() {
  const [sections, setSections] = useState<ISection[]>([]);
  const store = sectionStore;
  
  useEffect(() => {
    (async () => {
      await store.getAllSectionsAsync('0');
      setSections(store.sections);
    })();
  }, []);

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
        {sections.map((section) => {
            return (
              <div key={section.id}>
                <BaseComponent {...section} />
              </div>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
}