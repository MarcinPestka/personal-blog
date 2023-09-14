import { Grid } from "@mui/material";
import { ISection } from "../../../models/section.model";
import "highlight.js/styles/github.css";
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import csharp from 'highlight.js/lib/languages/csharp';
import { useEffect } from "react";
import { sectionStore } from "../../../store/sectionStore";

export function CodeComponent(props: ISection) {
  useEffect(() => {
  hljs.registerLanguage('javascript', javascript);
  hljs.registerLanguage('csharp', csharp);
  hljs.highlightAll();
  }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={10}>
          <pre className="theme-base16-material">
            <code className="language-csharp">{sectionStore.newSection ? props.subTitle:sectionStore.newSection}</code>
          </pre>
        </Grid>
      </Grid>
    </>
  );
}
