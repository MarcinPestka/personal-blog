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
import { Observer, useObserver } from "mobx-react-lite";
import { courseStore } from "../store/courseStore";

export function Course() {
  const store = courseStore;

  useEffect(() => {
    (async () => {
      await store.getCourseById("3");
  })();
  }, []);

  return <Observer>{() => (
    <>
      <Grid container spacing={0}>
        <Grid item>
          <NestedList></NestedList>
        </Grid>
        <Grid item>
          {store.activeSections &&
            store.activeSections.map((section) => {
              return <p key={section.id}>{section.title}</p>;
              //return <BaseComponent key={section.id} {...section}></BaseComponent>;
            })}
        </Grid>
      </Grid>
    </>
  )}</Observer>
}
