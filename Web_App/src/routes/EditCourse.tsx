import "../App.scss";
import { Grid } from "@mui/material";
import { BaseComponent } from "../components/BaseComponent";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NestedList from "../components/CourseComponents/SideBar/SideBar";
import { Observer } from "mobx-react-lite";
import { courseStore } from "../store/courseStore";
import { SectionAddStage, SectionTypeEnum } from "../services/SectionService";

export function EditCourse() {
  const [addNewSection, setAddNewSection] = useState<SectionAddStage>();
  const [NewSectionStage, setNewSectionStage] = useState<SectionTypeEnum>();
  const store = courseStore;
  var params = useParams();

  useEffect(() => {
    (async () => {
      const courseId = params.courseId;
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
              {store.activeSections && (
                <>
                  {store.activeSections.map((section) => {
                    return (
                      <BaseComponent
                        key={section.id}
                        {...section}
                      ></BaseComponent>
                    );
                  })}
                  {!addNewSection ? (
                    <button
                      onClick={() => {
                        setAddNewSection(SectionAddStage.sectionType);
                      }}
                    >
                      Dodaj następną sekcję
                    </button>
                  ) : (
                    <></>
                  )}
                  {addNewSection === SectionAddStage.sectionType ? (
                    <div className="sectionTypeDiv">
                      <div
                        onClick={() => {
                          setNewSectionStage(SectionTypeEnum.title);
                          setAddNewSection(SectionAddStage.sectionContents);
                        }}
                      >
                        section title
                      </div>
                      <div
                        onClick={() => {
                          setNewSectionStage(SectionTypeEnum.Code);
                          setAddNewSection(SectionAddStage.sectionContents);
                        }}
                      >
                        section code
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                  {addNewSection === SectionAddStage.sectionContents ? (
                    <div className="sectionTypeDiv">
                      <div>{NewSectionStage}</div>
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </Grid>
          </Grid>
        </>
      )}
    </Observer>
  );
}
