import "../App.scss";
import { Grid } from "@mui/material";
import { GetAllSections } from "../services/SectionService";
import { BaseComponent } from "../components/BaseComponent";
import { useEffect, useState } from "react";
import { IPost } from "../models/post.model";
import { useParams } from "react-router-dom";
import { sectionStore } from "../store/sectionStore";
import NestedList from "../components/CourseComponents/SideBar/SideBar";
import { useObserver } from "mobx-react-lite";

export function Posts() {
    const store = sectionStore;
    
    useEffect(() => {
      (async () => {
        await store.getAllPosts();
      })();
    }, []);

  return useObserver(() => (
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
  ));
}
