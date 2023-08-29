import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { courseStore } from "../../../store/courseStore";
import { Checkbox } from "@mui/material";
import { Observer } from "mobx-react-lite";
import AddNewTopicComponent from "./NewTopic";
import { editingCourseStore } from "../../../store/editingSectionsStore";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteTopic } from "../../../services/TopicService";
import AddNewLectureComponent from "./NewLecture";

export default function LessonList() {
  const [collapse, setCollapse] = React.useState(1);
  const store = courseStore;

  async function handleCollapseClick(test: number) {
    setCollapse(test);
    store.setActiveLectureId(test);
    store.setActiveTopicId(null);
    store.setActiveSections();
  }

  async function handleTopicClick(test: number) {
    store.setActiveTopicId(test);
    store.setActiveSections();
  }

  async function handleTopicDelete(topicId:number) {
    deleteTopic(topicId);
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
                      {courseStore.activeCourse ?
                      <Checkbox checked={store.completedTopicId.some(x => x === topic.id) ? true : false} onClick={(e)=>{e.stopPropagation(); store.HandleTopicCompletion(topic.id,1)}} />:
                      <></>
                      }
                      <ListItemText primary={`${index+1}.${topicIndex+1}. ${topic.title}`} />
                      
                      {editingCourseStore.editPage ?
                       <DeleteIcon onClick={() => handleTopicDelete(topic.id)}></DeleteIcon> :
                      <></>
                      }
                    </ListItemButton>
                  </List>
                </Collapse>
              ))}
              <AddNewTopicComponent />
              </>
            ) : (
              <></>
            )}
          </React.Fragment>
        ))}
              <AddNewLectureComponent/>
    </>
      )}
    </Observer>
  );
}
