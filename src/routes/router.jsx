import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../Error/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddVolunteer from "../pages/AddVolunteer";
import PrivateRoutes from "./PrivateRoutes";
import ManageMyVolunteer from "../pages/ManageMyVolunteer";
import AllVolunteer from "../pages/AllVolunteer";
import VolunteerDetails from "../pages/VolunteerDetails";

    const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/addVolunteer',
          element: <PrivateRoutes>
            <AddVolunteer></AddVolunteer>
          </PrivateRoutes>
        },
        {
          path: '/myVolunteer',
          element: <PrivateRoutes>
            <ManageMyVolunteer></ManageMyVolunteer>
          </PrivateRoutes>
        },
        {
          path: '/allVolunteer',
          element: <AllVolunteer></AllVolunteer>
        },
        {
          path: '/volunteerDetails/:id',
          element: <PrivateRoutes>
            <VolunteerDetails></VolunteerDetails>
          </PrivateRoutes>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
      ]
    },
  ]);

export default router;