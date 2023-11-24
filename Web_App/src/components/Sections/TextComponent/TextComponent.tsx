import { Grid } from "@mui/material";
import { ISection } from "../../../models/section.model";
import ReactMarkdown from "react-markdown";

export function TextComponent(props: ISection) {
  return (
    <>
      <Grid container>
        <Grid item xs={10}>
          <div className="lineBreakDisplay"><ReactMarkdown>{props.text}</ReactMarkdown></div>
        </Grid>
      </Grid>
    </>
  );
}
