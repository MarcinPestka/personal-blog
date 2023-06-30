import "../App.scss";
import { Grid } from "@mui/material";
import { BaseComponent } from "../components/BaseComponent";
import { useEffect, useState } from "react";
import { ISection } from "../models/section.model";
import { sectionStore, SectionsStore } from "../store/sectionStore";
import { useParams } from "react-router-dom";

function PostPage() {
  const [sections, setSections] = useState<ISection[]>([]);
  const store = sectionStore;
  var params = useParams();
  useEffect(() => {
    (async () => {
      await store.getAllSectionsAsync(params.id);
      setSections(store.sections);
    })();
  }, [params]);

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

export default PostPage;