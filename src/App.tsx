import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { Home } from "./pages/home/Home";
import { Courses } from "./pages/courses";
import { Mycourses } from "./pages/mycourses";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/mycourses",
        element: <Mycourses />,
      },
    ],
  },
]);
