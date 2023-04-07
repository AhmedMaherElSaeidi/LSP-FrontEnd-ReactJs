import { BsFacebook, BsInstagram, BsTwitter, BsYoutube, BsLinkedin, BsGithub } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white" style={{ backgroundColor: "#f1f1f1" }}>
      <section className="container pt-4">
        <section className="row mb-3">
          <section className="col-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, dolore. Magnam quia dicta dolorem tempore reprehenderit totam nemo nisi nobis id sunt. Facere nam maiores labore similique accusamus nisi suscipit?
          </section>
          <section className="col-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, dolore. Magnam quia dicta dolorem tempore reprehenderit totam nemo nisi nobis id sunt. Facere nam maiores labore similique accusamus nisi suscipit?
          </section>
        </section>
        <section className="mb-4 footer-icons">
          <a className="btn btn-outline-secondary btn-lg text-white m-1" target="blank" href="https://www.facebook.com/ibrahim.mostafa.9809">
            <BsFacebook />
          </a>
          <a className="btn btn-outline-secondary btn-lg text-white m-1" target="blank" href="https://www.instagram.com/hika8853/">
            <BsInstagram />
          </a>
          <a className="btn btn-outline-secondary btn-lg text-white m-1" target="blank" href="https://twitter.com/_Ahmed__Maher">
            <BsTwitter />
          </a>
          <a className="btn btn-outline-secondary btn-lg text-white m-1" target="blank" href="https://www.youtube.com/channel/UCL3Kf6BwwiZyN723LfiEsCA">
            <BsYoutube />
          </a>
          <a className="btn btn-outline-secondary btn-lg text-white m-1" target="blank" href="https://www.linkedin.com/in/ahmedmaherelsaeidi">
            <BsLinkedin />
          </a>
          <a className="btn btn-outline-secondary btn-lg text-white m-1" target="blank" href="https://github.com/AhmedMaherElSaeidi">
            <BsGithub />
          </a>
        </section>
      </section>

      <section className="text-center text-gold p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        &copy;Copyright 2022/2023 LSP library
      </section>
    </footer>
  );
};

export default Footer;
