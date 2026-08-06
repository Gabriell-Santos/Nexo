import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { Home } from "./pages/home/Home";
import { Courses } from "./pages/courses";
import { Mycourses } from "./pages/mycourses";
import { Details } from "./pages/details";
import { SignOut } from "./pages/SignOut";
import { SignUp } from "./pages/signUp";
import { Recoverpassword } from "./pages/Recoverpassword";
import { ProtectedRoute } from "./components/ProtectedRoute";

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
        element: (
          <ProtectedRoute>
            <Mycourses />
          </ProtectedRoute>
        ),
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
      {
        path: "/recoverpassword",
        element: <Recoverpassword />,
      },
    ],
  },
  {
    path: "/signout",
    element: <SignOut />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
