import { Grid } from "@mui/material";
import { ISection } from "../../../models/section.model";
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { useEffect } from "react";

export function CodeComponent(props: ISection) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={10}>
          <pre>
            <code className="language-typescript">{props.text}</code>
          </pre>
        </Grid>
      </Grid>
    </>
  );
}
