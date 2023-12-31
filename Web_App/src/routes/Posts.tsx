import "../App.scss";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import { sectionStore } from "../store/sectionStore";
import { Observer } from "mobx-react-lite";
import { PostTile } from "../components/TileComponents/PostTiles/PostTileComponent";
import { NewPostTile } from "../components/TileComponents/PostTiles/NewPostTile";
import { postStore } from "../store/postStore";

export function Posts() {

  useEffect(() => {
    (async () => {
      await postStore.getAllPosts();
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
            {postStore.posts.map((post) => {
              return (
                <Grid item>
                  <PostTile {...post}></PostTile>
                </Grid>
              );
            })}
            <Grid item>
              <NewPostTile/>
            </Grid>
          </Grid>
        </>
      )}
    </Observer>
  );
}
