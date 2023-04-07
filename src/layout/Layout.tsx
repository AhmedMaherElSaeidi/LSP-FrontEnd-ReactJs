import { ReactNode, useState  } from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [search, setSearch] = useState("*")
  const search_for = (value: string) => setSearch(value);
  return (
    <>
      <NavBar search={search_for}/>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
