import WebsiteLogo from "../../../assets/images/LSPWebLogo.png";
import { HiLibrary } from "react-icons/hi";
import { ReactNode } from "react";
import "./FormBox.css";
import { Link } from "react-router-dom";

interface FormBoxProps {
  children: ReactNode;
  bgkclass: string;
  formWidth: string;
  formHeader: string;
  formAction?: string;
  formMethod?: string;
}

const FormBox = ({ children, bgkclass, formWidth, formHeader, formAction = "", formMethod = "GET" }: FormBoxProps) => {
  return (
    <section className={"container-fluid " + bgkclass}>
      <section className="formbox-header">
        <Link to="/pages/home"><img className="library-logo" src={WebsiteLogo} alt="Website_Logo" title="Home"/></Link>        
      </section>
      <section className="formbox-body">
        <form className={formWidth} action={formAction} method={formMethod}>
          <section className="mb-4 text-lightblue  text-center fw-bold fs-2">
            <HiLibrary /> {formHeader}
          </section>
          {children}
        </form>
      </section>
    </section>
  );
};

export default FormBox;
