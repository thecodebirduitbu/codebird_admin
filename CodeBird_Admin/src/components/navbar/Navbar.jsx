import { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [isNavActive, setNavActive] = useState(false);

    const handleHamburgerClick = () => {
      setNavActive(!isNavActive);
    };

  return (
    <header>
      <div className="logo">
        <div className="logo_content">
          <img src={Logo} alt="Codebird Logo" />
          <Link to={"/dashboard"}>
            <h3>The CodeBird Admin</h3>
          </Link>
        </div>
      </div>
      <div
        className={`hamburger ${isNavActive ? "is-active" : ""}`}
        onClick={handleHamburgerClick}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className={`nav_bar ${isNavActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/members" className="home">
              Members
            </Link>
          </li>
          <li>
            <Link to="/" className="home">
              Core Team
            </Link>
          </li>
          <li>
            <Link to="/" className="home">
              Events
            </Link>
          </li>
          <li>
            <div className="buttons">
              <button className="login">
                <span>
                  <i className="fa-solid fa-user"></i> Logout
                </span>
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar
