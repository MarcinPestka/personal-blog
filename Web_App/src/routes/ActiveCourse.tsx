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
import { ICourse } from "../models/course.model";

export function ActiveCourse() {
  const store = courseStore;
  var params = useParams();

  useEffect(() => {
    (async () => {
      const courseId = params.id;
      await store.getCourseById(courseId);
      await store.GetCompletedTopics(courseId);
    })();
  }, []);

  return (
    <Observer>
      {() => (
        <>
          <Grid container spacing={0}>
            <Grid item>
              <NestedList></NestedList>
            </Grid>
            <Grid item xs ml={10}>
              {store.activeSections &&
                store.activeSections.map((section) => {
                  return (
                    <BaseComponent
                      key={section.id}
                      {...section}
                    ></BaseComponent>
                  );
                })}
            </Grid>
          </Grid>
        </>
      )}
    </Observer>
  );
}
