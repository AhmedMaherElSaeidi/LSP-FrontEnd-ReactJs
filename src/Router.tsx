import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "./pages/LoginPage/LoginPage";
import Register from "./pages/RegisterPage/RegisterPage";
import CartPage from "./pages/CartPage/CartPage";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFound from "./components/NotFound/NotFound";
import OptionsPage from "./pages/OptionsPage/OptionsPage";
import CreateBook from "./components/CreateBook/CreateBook";
import UpdateBook from "./components/UpdateBook/UpdateBook";
import UsersAccount from "./components/UsersAccount/UsersAccount";
import BorrowRequests from "./components/BorrowRequests/BorrowRequests";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/pages/home",
        element: <HomePage />,
      },
      {
        path: "/pages/cart",
        element: <CartPage />,
      },
      {
        path: "/pages/about",
        element: <AboutPage />,
      },
      {
        path: "/pages/options",
        element: <OptionsPage />,
        children: [
          {
            path: "/pages/options/",
            element: <CreateBook />,
          },
          {
            path: "/pages/options/create-book",
            element: <CreateBook />,
          },
          {
            path: "/pages/options/user-accounts",
            element: <UsersAccount />,
          },
          {
            path: "/pages/options/borrow-requests",
            element: <BorrowRequests />,
          },
          {
            path: "/pages/options/update-book/:id",
            element: <UpdateBook />,
          },
        ],
      },
    ],
  },
  {
    path: "/authenication/register",
    element: <Register />,
  },
  {
    path: "/authenication/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
