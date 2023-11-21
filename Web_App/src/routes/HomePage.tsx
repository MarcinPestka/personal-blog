import { useEffect } from "react";
import "../App.scss";
import { Grid } from "@mui/material";
import { Observer } from "mobx-react-lite";
import { postStore } from "../store/postStore";
import img from "../image/htmlcss.jpg";
import { DraggableComponent } from "../components/Draggable/DraggableComponent";
import { CarouselComponent } from "../components/Sections/Carousel/CarouselComponent";
import { sectionStore } from "../store/sectionStore";


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
            {/* <div className="container">
              <div className="wrap">
                <img src={img} alt="" className="img"/>
                <button>Zacznij</button>
                <p>Programowanie JavaScript</p>
                <p>Dla zielonych</p>
              </div>
            </div> */}
        </>
      )}
      
    </Observer>
  );
}
