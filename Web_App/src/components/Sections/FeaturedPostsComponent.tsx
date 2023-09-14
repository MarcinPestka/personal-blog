import { Grid } from "@mui/material";
import { useEffect } from "react";
import { sectionStore } from "../../store/sectionStore";
import { PostTile } from "../TileComponents/PostTiles/PostTileComponent";
import { Observer } from "mobx-react-lite";
import { postStore } from "../../store/postStore";

export function FeaturedPosts() {

  useEffect(() => {
    (async () => {
      await postStore.GetFeaturedPosts();
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
        {postStore.posts.map((section) => {
          return (
            <Grid item key={section.id}>
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