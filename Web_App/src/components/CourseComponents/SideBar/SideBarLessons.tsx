import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import SideBarCollapse from "./SideBarCollapse";
import { SectionsRepository } from "../../../services/SectionService";
import { sectionStore } from "../../../store/sectionStore";

export default function LessonList() {
  const [collapse, setCollapse] = React.useState(1);
  const [sectionState, setSection] = React.useState(1);
  const store = sectionStore;

  async function handleCollapseClick(test: number) {
    setCollapse(test);
  }

  async function handleSectionClick(test: number) {
    setSection(test);
    await store.getAllSectionsAsync(test.toString());
  }

  return (
    <>
      {SectionsRepository.map((lesson) => (
        <>
          <ListItemButton
            key={lesson.idk}
            onClick={() => {handleCollapseClick(lesson.id); handleSectionClick(1)}}
          >
            <ListItemText primary={lesson.title} key={lesson.idk} />
            {collapse === lesson.id ? <ExpandMore /> : <ExpandLess />}
          </ListItemButton>
          {collapse === lesson.id ? (
            lesson.sections.map((section) => (
              <Collapse in={true} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }} onClick={() => handleSectionClick(section.id)} id={section.id === sectionState ? 'test' : ''}>
                    <ListItemText primary={section.title} />
                  </ListItemButton>
                </List>
              </Collapse>
            ))
          ) : (
            <></>
          )}
        </>
      ))}
    </>
  );
}
