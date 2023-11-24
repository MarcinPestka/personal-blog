import { Grid } from "@mui/material";
import { ISection } from "../../../models/section.model";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export function CodeComponent(props: ISection) {

  return (
    <>
      <Grid container>
        <Grid item xs={10}>
          <SyntaxHighlighter language={props.text} style={stackoverflowLight}>
              {props.subTitle}
          </SyntaxHighlighter>
        </Grid>
      </Grid>
    </>
  );
}
