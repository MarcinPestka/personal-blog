import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { courseStore } from "../../../store/courseStore";
import { useEffect } from "react";

export default function LessonList() {
  const [collapse, setCollapse] = React.useState(1);
  const [sectionState, setSection] = React.useState(1);
  const store = courseStore;

  useEffect(() => {
    (async () => {
      await store.getCourseById("3");
      setCollapse(store.course.lectures[0].id);
    })();
  }, []);

  async function handleCollapseClick(test: number) {
    setCollapse(test);
    store.setActiveLectureId(test);
    store.setActiveTopicId(null);
    store.setActiveSections();
  }

  async function handleTopicClick(test: number) {
    setSection(test);
    store.setActiveTopicId(test);
    store.setActiveSections();
  }

  return (
    <>
      {store.course &&
        store.course.lectures.map((lesson) => (
          <React.Fragment key={lesson.id}>
            <ListItemButton
              onClick={() => {
                handleCollapseClick(lesson.id);
              }}
              id={lesson.id === store.lectureId ? "pickedLecture" : ""}
            >
              <ListItemText primary={lesson.title} />
              {collapse === lesson.id ? <ExpandMore /> : <ExpandLess />}
            </ListItemButton>
            {collapse === lesson.id ? (
              lesson.topics.map((topic) => (
                <Collapse in={true} timeout="auto" unmountOnExit key={topic.id}>
                  <List component="div" disablePadding>
                    <ListItemButton
                      sx={{ pl: 4 }}
                      onClick={() => handleTopicClick(topic.id)}
                      id={topic.id === store.topicId ? "pickedTopic" : ""}
                    >
                      <ListItemText primary={topic.title} />
                    </ListItemButton>
                  </List>
                </Collapse>
              ))
            ) : (
              <></>
            )}
          </React.Fragment>
        ))}
    </>
  );
}
