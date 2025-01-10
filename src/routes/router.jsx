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
import Update from "../pages/Update";
import AboutUs from "../pages/AboutUs";

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
          element: <PrivateRoutes>
            <AllVolunteer></AllVolunteer>
          </PrivateRoutes>
        },
        {
          path: '/volunteerDetails/:id',
          element: 
            <VolunteerDetails></VolunteerDetails>
        },
        {
          path: '/update/:id',
          element: <PrivateRoutes>
            <Update></Update>
          </PrivateRoutes>,
          loader: ({params})=> fetch(`http://localhost:5000/update-volunteer/${params.id}`)
        },
        {
          path: '/about',
          element: <AboutUs></AboutUs>
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