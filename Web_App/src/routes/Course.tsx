import "../App.scss";
import { Grid } from "@mui/material";
import { GetAllSections } from "../services/SectionService";
import { BaseComponent } from "../components/BaseComponent";
import { useEffect, useState } from "react";
import { IPost } from "../models/post.model";
import { useParams } from "react-router-dom";
import { sectionStore } from "../store/sectionStore";
import NestedList from "../components/CourseComponents/SideBar/SideBar";
import { ISection } from "../models/section.model";
import { useObserver } from "mobx-react-lite";

export function Course() {
    const store = sectionStore;

    useEffect(() => {
        (async () => {
          await store.getAllSectionsAsync('1');
        })();
      }, []);
    

  return useObserver(() => (
    <>
      <Grid
        container
        spacing={0}
      >
        <Grid item>
        <NestedList></NestedList>
        </Grid>
        <Grid item>
        {store.sections.map((post) => {
            return (
              <div key={post.id}>
                <p> {post.title}</p>
              </div>
            );
          })}
            <p>Page all about me :-) Page all about me :-)Page all about me :-)Page all about me :-)</p>
        </Grid>
      </Grid>
    </>
  ));
}

