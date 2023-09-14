import "../App.scss";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import { Observer } from "mobx-react-lite";
import { courseStore } from "../store/courseStore";
import { CourseTile } from "../components/TileComponents/CourseTiles/CourseTileComponet";
import { NewCourseTile } from "../components/TileComponents/CourseTiles/NewCourseTile";

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
