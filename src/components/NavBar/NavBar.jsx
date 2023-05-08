import axios from "axios";
import { SERVER_URL } from "../../core/globals";
import { getUser, isAuth, removeToken } from "../../core/authenication";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { CgOptions } from "react-icons/cg";
import { TiInfoLarge } from "react-icons/ti";
import { IoReorderFour } from "react-icons/all";
import { BiCategory, BiCartAlt, BiHomeAlt } from "react-icons/bi";

import "./NavBar.css";
import WebsiteLogo from "../../assets/images/LSPWebLogo.png";

const NavBar = () => {
  const navigate = useNavigate();
  const signout = () => {
    removeToken();
    navigate("/authenication/login");
  };
  const [categories, setCategories] = useState({
    loaded: false,
    result: null,
  });

  useEffect(() => {
    axios
      .get(SERVER_URL + "category")
      .then((res) => {
        setCategories({ loaded: true, result: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <section className="container-fluid">
        <Link className="navbar-brand" to="/pages/home">
          <img src={WebsiteLogo} alt="Website_Logo" title="Home" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span>
            <IoReorderFour />
          </span>
        </button>
        <section className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/pages/home">
                <BiHomeAlt /> Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <BiCategory /> Categories
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                {categories.loaded &&
                  categories.result.map((category, index) => (
                    <li key={index}>
                      <Link className="dropdown-item" to={"/pages/home?category=" + category.category_id}>
                        {category.category}
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
                {isAuth() && getUser().type == "librarian" && (
                  <li>
                    <Link className="dropdown-item" to="/pages/options">
                      Settings
                    </Link>
                  </li>
                )}
                {isAuth() && (
                  <li>
                    <a className="dropdown-item" onClick={signout}>
                      Sign Out
                    </a>
                  </li>
                )}
                {!isAuth() && (
                  <li>
                    <Link className="dropdown-item" to="/authenication/login">
                      Sign In
                    </Link>
                  </li>
                )}
              </ul>
            </li>
            {isAuth() && getUser().type == "normal" && (
              <li className="nav-item">
                <Link className="nav-link" to="/pages/cart">
                  <BiCartAlt /> Cart
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/pages/about">
                <TiInfoLarge /> AboutUs
              </Link>
            </li>
          </ul>
        </section>
      </section>
    </nav>
  );
};

export default NavBar;
