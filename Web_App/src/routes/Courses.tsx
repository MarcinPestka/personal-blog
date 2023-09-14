import "../App.scss";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import { sectionStore } from "../store/sectionStore";
import { Observer } from "mobx-react-lite";
import { PostTile } from "../components/TileComponents/PostTileComponent";
import { courseStore } from "../store/courseStore";
import { CourseTile } from "../components/TileComponents/CourseTileComponet";
import { NewCourseTile } from "../components/CourseComponents/CreatingCourses/NewCourseTile";

export function Courses() {
  const store = courseStore;

  useEffect(() => {
    (async () => {
      await store.getAllCourses();
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
            {store.courses.map((post) => {
              return (
                <Grid item>
                  <CourseTile {...post} />
                </Grid>
              );
            })}
            <Grid item>
              <NewCourseTile/>
            </Grid>
          </Grid>
        </>
      )}
    </Observer>
  );
}
