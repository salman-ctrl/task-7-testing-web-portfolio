import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter } from "react-router-dom";
import Achievment from "../pages/Achievment";
import LandingPage from "../pages/LandingPage";
import Project from "../pages/Project";
import Hire from "../component/Hire";
export var router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(LandingPage, {})
    },
    {
        path: "/achievment",
        element: _jsx(Achievment, {})
    },
    {
        path: "/project",
        element: _jsx(Project, {})
    },
    {
        path: "/hire",
        element: _jsx(Hire, {})
    }
]);
