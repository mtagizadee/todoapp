import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

export const publicRoutes = [
    {
        path: '/auth/login',
        exact: true,
        element: Login
    },
    {
        path: '/auth/signup',
        exact: true,
        element: Signup
    }
]