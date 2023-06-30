import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  HashRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import "./index.css";
import PostPage from "./routes/PostPage";
import { NavBarComponent } from "./components/BasicComponents/NavbarComponent";
import { FooterComponent } from "./components/BasicComponents/FooterComponent";
import { NotFound } from "./routes/NotFound";
import { AboutMe } from "./routes/AboutMe";
import { HomePage } from "./routes/HomePage";
import React from "react";
import { Login } from "./routes/Login";
import { Posts } from "./routes/Posts";
import { Course } from "./routes/Course";
import { Courses } from "./routes/Courses";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
    <NavBarComponent />
      <Routes>
        <Route path="/" element={<><HomePage /></>} />
        <Route path="course/:id" element={<><Course /></>} />
        <Route path="courses" element={<><Courses /></>} />
        <Route path="about" element={<><AboutMe /></>} />
        <Route path="posts" element={<><Posts /></>} />
        <Route path="post/:id" element={<><PostPage /></>} />
        <Route path="login" element={<><Login /></>} />
        <Route path="*" element={<><NotFound /></>} />
      </Routes>
    </BrowserRouter>
    </>
);
