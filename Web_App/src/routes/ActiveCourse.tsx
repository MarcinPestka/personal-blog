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
import { BaseComponentWrapper } from "../components/BaseComponentWrapper";

export function ActiveCourse() {
  const store = courseStore;
  var params = useParams();

  useEffect(() => {
    (async () => {
      courseStore.activeCourse = true;
      await store.getCourseById(Number(params.activeId));
      await store.GetCompletedTopics(params.activeId);
      await courseStore.getActiveCourseId();
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
                    <BaseComponentWrapper
                      key={section.id}
                      {...section}
                    />
                  );
                })}
            </Grid>
          </Grid>
        </>
      )}
    </Observer>
  );
}
