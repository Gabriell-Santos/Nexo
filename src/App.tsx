import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { Home } from "./pages/home/Home";
import { Courses } from "./pages/courses";
import { Mycourses } from "./pages/mycourses";
import { Details } from "./pages/details";
import { SignOut } from "./pages/SignOut";

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
      {
        path: "/details/:id",
        element: <Details />,
      },
    ],
  },
  {
    path: "/signout",
    element: <SignOut />,
  },
]);
