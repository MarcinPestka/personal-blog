import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import PostPage from "./routes/PostPage";
import { NavBarComponent } from "./components/NavBar";
import { FooterComponent } from "./components/FooterComponent";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}></Route>
      <Route path="post/:id" element={<PostPage />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <NavBarComponent></NavBarComponent>
    <RouterProvider router={router} />
    <FooterComponent></FooterComponent>
  </>
);
