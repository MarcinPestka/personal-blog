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
import { DraggableComponent } from "../components/Draggable/DraggableComponent";

export function Course() {
  const store = courseStore;
  var params = useParams();

  useEffect(() => {
    (async () => {
      await store.getCourseById(Number(params.courseId));
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
            <Grid item xs ml={3}>
              {sectionStore.sections &&
                sectionStore.sections.map((section) => {
                  return (
                    <DraggableComponent element={section} key={section.id}/>
                  );
                })}
            </Grid>
          </Grid>
        </>
      )}
    </Observer>
  );
}
