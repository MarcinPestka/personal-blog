import "../App.scss";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NestedList from "../components/CourseComponents/SideBar/SideBar";
import { Observer } from "mobx-react-lite";
import { courseStore } from "../store/courseStore";
import { editingCourseStore } from "../store/editingCourseStore";
import { AddNewSectionInbetweenButton } from "../components/SectionEditingComponents/EditingSubComponents/AddNewSectionInbetweenButtonComponent";
import { DraggableComponent } from "../components/Draggable/DraggableComponent";
import { sectionStore } from "../store/sectionStore";
import { ExamSection } from "../components/Sections/Exam/ExamSectionComponent";
import { examStore } from "../store/examStore";

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
              {!examStore.isExam && sectionStore.sections && (
                <>
                  {sectionStore.sections.map((section) => {
                    return (
                      <DraggableComponent element={section} key={section.id}/>
                    );
                  })}
                  {
                    sectionStore.sections &&
                    <AddNewSectionInbetweenButton section={sectionStore.sections.length + 1}/>
                  }
                </>
              )}
              {examStore.isExam && examStore.exam &&
                <ExamSection/>
              }
            </Grid>
          </Grid>
        </>
      )}
    </Observer>
  );
}
