import { Grid } from "@mui/material";
import "../App.scss";
import { courseStore } from "../store/courseStore";
import { CourseTile } from "../components/TileComponents/CourseTiles/CourseTileComponet";
import { Observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userStore } from "../store/userStore";

export function MyCourses() {
    const _courseStore = courseStore;
    const _userStore = userStore;
    const navigate = useNavigate();
    
    useEffect(() => {
      (async () => {
        if (!_userStore.loggedIn) {
            navigate('/');
        }else{
            await _courseStore.GetAllActiveCourses();
        }
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
            {_courseStore.courses.map((post) => {
              return (
                <Grid item>
                  <CourseTile {...post} />
                </Grid>
              );
            })}
          </Grid>
        </>
      )}
    </Observer>
  );
}
