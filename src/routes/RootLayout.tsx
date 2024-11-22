import { createBrowserRouter } from "react-router-dom"
import Achievment from "../pages/Achievment";
import LandingPage from "../pages/LandingPage";
import Project from "../pages/Project";
import Hire from "../component/Hire";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />
    },
    {
        path: "/achievment",
        element: <Achievment />
    },
    {
        path: "/project",
        element: <Project />
    },
    {
        path: "/hire",
        element: <Hire />
    }
])