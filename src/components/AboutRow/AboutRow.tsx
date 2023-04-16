import { ReactNode } from "react";
import "./AboutRow.css";

interface AboutRowProps {
  heading: string;
  children: ReactNode;
}
const AboutRow = ({ heading, children }: AboutRowProps) => {
  return (
    <section>
      <h2 className="text-wheat">{heading}</h2>
      <p className="about-p">{children}</p>
      <hr />
    </section>
  );
};

export default AboutRow;
