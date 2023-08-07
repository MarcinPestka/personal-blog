import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { courseStore } from "../../../store/courseStore";
import { useEffect } from "react";
import { Button, Checkbox } from "@mui/material";
import { useParams } from "react-router-dom";
import { Observer } from "mobx-react-lite";

export default function LessonList() {
  const [collapse, setCollapse] = React.useState(1);
  const [sectionState, setSection] = React.useState(1);
  const store = courseStore;
  var params = useParams();

  useEffect(() => {
    (async () => {
    })();
  }, [store.completedTopicId]);

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
    <Observer>
      {() => (
    <>
      {store.course &&
        store.course.lectures.map((lesson, index) => (
          <React.Fragment key={lesson.id}>
            <ListItemButton
              onClick={() => {
                handleCollapseClick(lesson.id);
              }}
              id={lesson.id === store.lectureId ? "pickedLecture" : ""}
            >
              <ListItemText primary={`${index+1}. ${lesson.title}`} />
              {collapse === lesson.id ? <ExpandMore /> : <ExpandLess />}
            </ListItemButton>
            {collapse === lesson.id ? (
              <>
              {lesson.topics.map((topic,topicIndex) => (
                <Collapse in={true} timeout="auto" unmountOnExit key={topic.id}>
                  <List component="div" disablePadding>
                    <ListItemButton
                      sx={{ pl: 4 }}
                      onClick={() => handleTopicClick(topic.id)}
                      id={topic.id === store.topicId ? "pickedTopic" : ""}
                    >
                      <Checkbox checked={store.completedTopicId.some(x => x === topic.id) ? true : false} onClick={(e)=>{e.stopPropagation(); store.HandleTopicCompletion(topic.id,6)}} />
                      <ListItemText primary={`${index+1}.${topicIndex+1}. ${topic.title}`} />
                    </ListItemButton>
                  </List>
                </Collapse>
              ))}
              </>
            ) : (
              <></>
            )}
          </React.Fragment>
        ))}
    </>
      )}
    </Observer>
  );
}
