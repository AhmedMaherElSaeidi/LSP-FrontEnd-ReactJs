import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar/>
      <Outlet/>
      <Footer />
    </>
  );
};

export default Layout;
