import List from "@mui/material/List";
import LessonList from "./SideBarLessons";

export default function NestedList() {
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, minWidth:360 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <LessonList></LessonList>
    </List>
  );
}
