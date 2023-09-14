import { Grid } from "@mui/material";
import { useEffect } from "react";
import { sectionStore } from "../../store/sectionStore";
import { PostTile } from "../TileComponents/PostTiles/PostTileComponent";
import { Observer } from "mobx-react-lite";

export function FeaturedCourses() {
  const store = sectionStore;

  useEffect(() => {
    (async () => {
      await store.GetFeaturedPosts();
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
        {store.posts.map((section) => {
          return (
            <Grid item>
              <PostTile {...section}></PostTile>
            </Grid>
          );
        })}
      </Grid>
    </>
      )}
    </Observer>
  );
}