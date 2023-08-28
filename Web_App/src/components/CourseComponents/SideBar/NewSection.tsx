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

export default function AddNewSectionComponent() {

  return (
    <Observer>
      {() => (
        <>
          <ListItemButton sx={{ pl: 4 }} onClick={() => console.log("object")}>
            <div> Add new section </div>
          </ListItemButton>
        </>
      )}
    </Observer>
  );
}
