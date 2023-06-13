import "../App.css";
import { Grid } from "@mui/material";
import { GetAllSections } from "../services/SectionService";
import { BaseComponent } from "../components/BaseComponent";

function PostPage() {
  var sections = GetAllSections();
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
          {sections.map((section) => {
            return (
              <BaseComponent {...section}/>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
}

export default PostPage;
