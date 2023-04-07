import { createBrowserRouter } from "react-router-dom";
import OptionsPage from "./pages/OptionsPage/OptionsPage";
import Register from "./pages/RegisterPage/RegisterPage";
import CartPage from "./pages/CartPage/CartPage";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/LoginPage/LoginPage";
import Layout from "./layout/Layout";

const router = createBrowserRouter([
{
    path:"/",
    element: <Layout>Home</Layout>
},
{
    path:"/register",
    element: <Register/>
},
{
    path:"/login",
    element: <Login/>
},
{
    path:"/cart",
    element: <Layout><CartPage/></Layout>
},
{
    path:"/home",
    element: <Layout><HomePage/></Layout>
},
{
    path:"/options",
    element: <Layout><OptionsPage/></Layout>
},
]);

export default router;