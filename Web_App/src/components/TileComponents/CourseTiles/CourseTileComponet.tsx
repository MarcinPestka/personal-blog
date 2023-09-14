import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { IPost } from "../../../models/post.model";
import { Link } from "react-router-dom";
import { ICourse } from "../../../models/course.model";

export function CourseTile(props: ICourse) {
  return (
    <>
      <Link to={`/course/${props.id}`}>
        <Card sx={{ width: 745, height: 150 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </>
  );
}
