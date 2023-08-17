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
import { editingCourseStore } from "../store/editingSectionsStore";
import { sectionStore } from "../store/sectionStore";
import { AddNewSection } from "../components/SectionEditingComponents/AddNewSectionComponent";
import { BaseComponentWrapper } from "../components/BaseComponentWrapper";
import { AddNewSectionInbetweenButton } from "../components/SectionEditingComponents/EditingSubComponents/AddNewSectionInbetweenButtonComponent";

export function EditCourse() {
  const store = courseStore;
  var params = useParams();

  useEffect(() => {
    (async () => {
      const courseId = params.courseId;
      await store.getCourseById(courseId);
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
                  <AddNewSectionInbetweenButton sectionOrder={7 + 1}/>
                  <AddNewSection/>
                </>
              )}
            </Grid>
          </Grid>
        </>
      )}
    </Observer>
  );
}
