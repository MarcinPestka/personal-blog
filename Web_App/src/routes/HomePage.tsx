import { useEffect } from "react";
import "../App.scss";
import { Grid } from "@mui/material";
import { sectionStore } from "../store/sectionStore";
import { Observer } from "mobx-react-lite";
import { FeaturedPosts } from "../components/Sections/FeaturedPostsComponent";
import { CarouselComponent } from "../components/Sections/Carousel/CarouselComponent";
import { DraggableComponent } from "../components/Draggable/DraggableComponent";
import { postStore } from "../store/postStore";


export function HomePage() {

  useEffect(() => {
    (async () => {
      await postStore.getPostById("0");
    })();
  }, []);

  return (
    <Observer>
      {() => (
        <>
          <Grid
            container
            spacing={2}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              {sectionStore.sections.map((section) => {
                return (
                    <DraggableComponent element={section} key={section.id}/>
                );
              })}
            </Grid>
            {/* <Grid item>
              <FeaturedPosts/>
            </Grid> */}
          </Grid>
          <CarouselComponent></CarouselComponent>
        </>
      )}
      
    </Observer>
  );
}
