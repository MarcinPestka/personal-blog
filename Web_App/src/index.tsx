import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./index.css";
import PostPage from "./routes/PostPage";
import { NavBarComponent } from "./components/BasicComponents/NavbarComponent";
import { NotFound } from "./routes/NotFound";
import { AboutMe } from "./routes/AboutMe";
import { HomePage } from "./routes/HomePage";
import { Login } from "./routes/Login";
import { Posts } from "./routes/Posts";
import { Course } from "./routes/Course";
import { Courses } from "./routes/Courses";
import { MyCourses } from "./routes/MyCourses";
import { ActiveCourse } from "./routes/ActiveCourse";
import { Register } from "./routes/Register";
import { MyAccount } from "./routes/myAccount";
import { EditCourse } from "./routes/EditCourse";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
    <NavBarComponent />
      <Routes>
        <Route path="/" element={<><HomePage /></>} />
        
        <Route path="courses" element={<><Courses /></>} />

        <Route path="MyCourses" element={<><MyCourses /></>} />
        <Route path="course/:courseId" element={<><Course /></>} />
        <Route path="course/:activeId/learn" element={<><ActiveCourse /></>} />
        <Route path="course/:courseId/edit" element={<><EditCourse /></>} />

        <Route path="about" element={<><AboutMe /></>} />
        <Route path="posts" element={<><Posts /></>} />
        <Route path="post/:id" element={<><PostPage /></>} />

        <Route path="login" element={<><Login /></>} />
        <Route path="register" element={<><Register /></>} />
        <Route path="myAccount" element={<><MyAccount /></>} />
        
        <Route path="*" element={<><NotFound /></>} />
      </Routes>
    </BrowserRouter>
    </>
);
