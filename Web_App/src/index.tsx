import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import PostPage from "./routes/PostPage";
import { NavBarComponent } from "./components/BasicComponents/NavbarComponent";
import { FooterComponent } from "./components/BasicComponents/FooterComponent";
import { NotFound } from "./routes/NotFound";
import { AboutMe } from "./routes/AboutMe";
import { HomePage } from "./routes/HomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />}/>
      <Route path="/about" element={<AboutMe />}/>
      <Route path="post/:id" element={<PostPage />} />
      <Route path="*" element={<NotFound/>}/>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <NavBarComponent/>
    <RouterProvider router={router} />
    <FooterComponent/>
  </>
);
