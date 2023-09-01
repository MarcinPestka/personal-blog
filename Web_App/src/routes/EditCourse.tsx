import "../App.scss";
import { Grid } from "@mui/material";
import { BaseComponent } from "../components/BaseComponent";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NestedList from "../components/CourseComponents/SideBar/SideBar";
import { Observer } from "mobx-react-lite";
import { courseStore } from "../store/courseStore";
import { SectionAddStage, SectionTypeEnum } from "../services/SectionService";
import { BaseEditComponent } from "../components/BaseEditComponent";
import { editingCourseStore } from "../store/editingCourseStore";
import { sectionStore } from "../store/sectionStore";
import { AddNewSection } from "../components/SectionEditingComponents/AddNewSectionComponent";
import { BaseComponentWrapper } from "../components/BaseComponentWrapper";
import { AddNewSectionInbetweenButton } from "../components/SectionEditingComponents/EditingSubComponents/AddNewSectionInbetweenButtonComponent";

export function EditCourse() {
  const store = courseStore;
  var params = useParams();

  useEffect(() => {
    (async () => {
      await store.getCourseById(Number(params.courseId));
      editingCourseStore.editPage = true;
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
              {store.activeSections && (
                <>
                  {store.activeSections.map((section) => {
                    return (
                      <BaseComponentWrapper
                        key={section.id}
                        {...section}
                      />
                    );
                  })}
                  {
                    courseStore.activeSections &&
                    <AddNewSectionInbetweenButton section={courseStore.activeSections.length + 1}/>
                  }
                </>
              )}
            </Grid>
          </Grid>
        </>
      )}
    </Observer>
  );
}
