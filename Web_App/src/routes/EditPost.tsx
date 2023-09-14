import "../App.scss";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { ISection } from "../models/section.model";
import { sectionStore } from "../store/sectionStore";
import { useParams } from "react-router-dom";
import { DraggableComponent } from "../components/Draggable/DraggableComponent";
import { AddNewSectionInbetweenButton } from "../components/SectionEditingComponents/EditingSubComponents/AddNewSectionInbetweenButtonComponent";
import { editingCourseStore } from "../store/editingCourseStore";
import { postStore } from "../store/postStore";
import { Observer } from "mobx-react-lite";

function EditPost() {
  var params = useParams();
  useEffect(() => {
    (async () => {
      await postStore.getPostById(params.id);
      editingCourseStore.editPage = true;
    })();
  }, [params]);

  return (
    <Observer>
      {() => (
        <>
      <Grid
        container
        spacing={0}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item marginLeft="100px" marginRight="100px">
          <>
          {sectionStore.sections.map((section) => (
            <DraggableComponent element={section} key={section.id}/>
          ))}
          <>
          {
            sectionStore.sections &&
            <AddNewSectionInbetweenButton section={sectionStore.sections.length + 1}/>
          }
          </>
          </>
        </Grid>
      </Grid>
    </>
      )}
      
    </Observer>
  );
}

export default EditPost;
