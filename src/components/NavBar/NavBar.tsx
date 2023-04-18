import WebsiteLogo from "../../assets/images/LSPWebLogo.png";
import { NavLink, NavLinkProps, Link } from "react-router-dom";
import { categories } from "../../core/services";
import { BiCategory, BiCartAlt, BiSearchAlt, BiHomeAlt } from "react-icons/bi";
import { TiInfoLarge } from "react-icons/ti";
import { CgOptions } from "react-icons/cg";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <section className="container-fluid">
        <NavLink className="navbar-brand" to="/pages/home">
          <img src={WebsiteLogo} alt="Website_Logo" title="Home"/>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <section className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {
                // @ts-ignore
                <NavLink className="nav-link" to="/pages/home" activeClassName="active">
                  <BiHomeAlt /> Home
                </NavLink>
              }
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <BiCategory /> Categories
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link className="dropdown-item" to={"/pages/home?category=" + category.replaceAll(" ", "_")}>
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <CgOptions /> Options
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                <li>
                  <Link className="dropdown-item" to="/pages/options">
                    Settings
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign Out
                  </a>
                </li>
                <li>
                  <Link className="dropdown-item" to="/authenication/login">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/authenication/register">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              {
                // @ts-ignore
                <NavLink className="nav-link" to="/pages/cart" activeClassName="active">
                  <BiCartAlt /> Cart
                </NavLink>
              }
            </li>
            <li className="nav-item">
              {
                // @ts-ignore
                <NavLink className="nav-link" to="/pages/about" activeClassName="active">
                  <TiInfoLarge /> AboutUs
                </NavLink>
              }
            </li>
          </ul>
        </section>
      </section>
    </nav>
  );
};

export default NavBar;
