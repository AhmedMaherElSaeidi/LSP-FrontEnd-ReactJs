import { createBrowserRouter } from "react-router-dom";

// MAIN PAGES
import Layout from "./layout/Layout";
import CartPage from "./pages/CartPage/CartPage";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import BookDetail from "./components/BookDetail/BookDetail";

// AUTHENICATION
import Login from "./pages/LoginPage/LoginPage";
import Register from "./pages/RegisterPage/RegisterPage";

// OPTIONS PAGE COMPONENTS
import OptionsPage from "./pages/OptionsPage/OptionsPage";
import BookCreate from "./components/BookCreate/BookCreate";
import FormUpdateBook from "./components/Form/FormUpdateBook/FormUpdateBook";
import UsersAccount from "./components/UsersAccount/UsersAccount";
import BorrowRequests from "./components/BorrowRequests/BorrowRequests";

// 404 NOT FOUND PAGE
import NotFound from "./components/NotFound/NotFound";

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
        path: "/test",
        element: <></>,
      },
      {
        path: "/pages/home",
        element: <HomePage />,
      },
      {
        path: "/pages/home/book/:id",
        element: <BookDetail />,
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
            element: <BookCreate />,
          },
          {
            path: "/pages/options/create-book",
            element: <BookCreate />,
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
            element: <FormUpdateBook />,
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
