import {
     createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../shared/ErrorPage";
import Main from "../Laout/Main";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
export const router = createBrowserRouter([
     {
          path: "/",
          element: <Main></Main>,
          errorElement: <ErrorPage></ErrorPage>,
          children: [
               {
                    path: "/",
                    element: <Home></Home>
               },
               {
                    path: 'register',
                    element: <Register></Register>
               },
               {
                    path: 'login',
                    element: <Login></Login>
               },
          ]

     },
]);