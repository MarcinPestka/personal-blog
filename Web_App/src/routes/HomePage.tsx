import { useEffect } from "react";
import "../App.scss";
import { Grid } from "@mui/material";
import { sectionStore } from "../store/sectionStore";
import { BaseComponent } from "../components/BaseComponent";
import { Observer } from "mobx-react-lite";
import { FeaturedPosts } from "../components/Sections/FeaturedPostsComponent";
import { CarouselComponent } from "../components/Sections/Carousel/CarouselComponent";
import img from "../../src/image/path.svg";
import { BaseComponentWrapper } from "../components/BaseComponentWrapper";


export function HomePage() {
  const store = sectionStore;

  useEffect(() => {
    (async () => {
      await store.getAllSectionsAsync("1");
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
              {store.sections.map((section) => {
                return (
                    <BaseComponentWrapper key={section.id} {...section} />
                );
              })}
            </Grid>
            <Grid item>
              <FeaturedPosts/>
            </Grid>
          </Grid>
          <CarouselComponent></CarouselComponent>
        </>
      )}
      
    </Observer>
  );
}
