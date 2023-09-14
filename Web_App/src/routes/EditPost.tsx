import "../App.scss";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { ISection } from "../models/section.model";
import { sectionStore } from "../store/sectionStore";
import { useParams } from "react-router-dom";
import { DraggableComponent } from "../components/Draggable/DraggableComponent";
import { AddNewSectionInbetweenButton } from "../components/SectionEditingComponents/EditingSubComponents/AddNewSectionInbetweenButtonComponent";
import { editingCourseStore } from "../store/editingCourseStore";

function EditPost() {
  const [sections, setSections] = useState<ISection[]>([]);
  const store = sectionStore;
  var params = useParams();
  useEffect(() => {
    (async () => {
      await store.getAllSectionsAsync(params.id);
      setSections(store.sections);
      editingCourseStore.editPage = true;
    })();
  }, [params]);

  return (
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
          {sections.map((section) => (
            <DraggableComponent element={section} key={section.id}/>
          ))}
          <>
          {
            sections &&
            <AddNewSectionInbetweenButton section={sections.length + 1}/>
          }
          </>
          </>
        </Grid>
      </Grid>
    </>
  );
}

export default EditPost;
