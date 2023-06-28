import "../App.scss";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import { sectionStore } from "../store/sectionStore";
import { Observer } from "mobx-react-lite";

export function Posts() {
    const store = sectionStore;
    
    useEffect(() => {
      (async () => {
        await store.getAllPosts();
      })();
    }, []);

  return <Observer>{() => (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
        {store.posts.map((post) => {
            return (
              <div key={post.id}>
                <p> {post.title}</p>
              </div>
            );
          })}
        </Grid>
      </Grid>
    </>
  )}</Observer>
}
