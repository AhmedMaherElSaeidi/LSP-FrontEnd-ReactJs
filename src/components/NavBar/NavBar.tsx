import WebsiteLogo from "../../assets/images/LSPWebLogo.png";
import { BiCategory, BiCartAlt, BiSearchAlt, BiHomeAlt } from "react-icons/bi";
import { TiInfoLarge } from "react-icons/ti";
import { CgOptions } from "react-icons/cg";
import "./NavBar.css";

interface NavBarProps{
  search: (value:string) => void;
}
const NavBar = ({search}:NavBarProps) => {
  const BOOKCAT = ["Science Fiction", "Psychology", "Horror", "Novel"];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={WebsiteLogo} alt="Website_Logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <BiHomeAlt /> Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <BiCategory /> Categories
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                {BOOKCAT.map((category, index) => (
                  <li key={index}>
                    <a className="dropdown-item" href="#">
                      {category}
                    </a>
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
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign Out
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign In
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign Up
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <BiCartAlt /> Cart
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <TiInfoLarge /> AboutUs
              </a>
            </li>
          </ul>
          <div className="d-flex input-search">
            <BiSearchAlt className="input-search-icon" />
            <input className="form-control" type="search" name="search-key" placeholder="Search" aria-label="Search" onChange={(event) => search(event.target.value)}/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
