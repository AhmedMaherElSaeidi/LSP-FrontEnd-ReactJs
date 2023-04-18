import WebsiteLogo from "../../../assets/images/LSPWebLogo.png";
import { Link } from "react-router-dom";
import { ReactNode } from "react";
import "./FormBox.css";

interface FormBoxProps {
  children: ReactNode;
  parentClass: string;
}

const FormBox = ({ children, parentClass}: FormBoxProps) => {
  return (
    <section className={"container-fluid " + parentClass}>
      <section className="formbox-header">
        <Link to="/pages/home">
          <img className="library-logo" src={WebsiteLogo} alt="Website_Logo" title="Home" />
        </Link>
      </section>
      <section className="formbox-body">{children}</section>
    </section>
  );
};

export default FormBox;