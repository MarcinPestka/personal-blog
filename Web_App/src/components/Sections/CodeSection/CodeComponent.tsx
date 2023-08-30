import { Grid } from "@mui/material";
import { ISection } from "../../../models/section.model";
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { useEffect } from "react";
import { editingCourseStore } from "../../../store/editingCourseStore";

export function CodeComponent(props: ISection) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={10}>
          <pre className="theme-base16-material">
            <code className="language-html">{editingCourseStore.editingSection ? props.subTitle:editingCourseStore.editingSection}</code>
          </pre>
        </Grid>
      </Grid>
    </>
  );
}
