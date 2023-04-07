import WebsiteLogo from "../../../assets/images/LSPWebLogo.png";
import { HiLibrary } from "react-icons/hi";
import { ReactNode } from "react";
import "./FormBox.css";

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
        <img className="library-logo" src={WebsiteLogo} alt="Website_Logo" />
      </section>
      <section className="formbox-body">
        <form className={formWidth} action={formAction} method={formMethod}>
          <section className="mb-4 text-gold text-center fw-bold fs-2">
            <HiLibrary /> {formHeader}
          </section>
          {children}
        </form>
      </section>
    </section>
  );
};

export default FormBox;
