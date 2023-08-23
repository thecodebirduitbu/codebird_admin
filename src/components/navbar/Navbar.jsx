import { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import { Link , useNavigate } from "react-router-dom";
import axios from "axios";
// import url from "../helper/helper";
const Navbar = () => {
  const navigate = useNavigate();

    const [isNavActive, setNavActive] = useState(false);

    const handleHamburgerClick = () => {
      setNavActive(!isNavActive);
    };

      const logout = async () => {
        try {
          await axios.get(`https://codebird-admin-server.vercel.app/api/logout`, {
            withCredentials: true,
          });
          console.log("log out");
          navigate("/");
        } catch (error) {
          console.log(error);
        }
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
            <Link to="/dashboard" className="home">
              All Users
            </Link>
          </li>
          <li>
            <Link to="/members" className="home">
              Members
            </Link>
          </li>
          <li>
            <Link to="/transactions" className="home">
              Transactions
            </Link>
          </li>
          <li>
            <Link to="/coreteam" className="home">
              Core Team
            </Link>
          </li>
          <li>
            <Link to="/events" className="home">
              Events
            </Link>
          </li>
          <li>
            <div className="buttons">
              <button onClick={logout} className="login">
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
