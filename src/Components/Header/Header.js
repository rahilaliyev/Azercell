import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/logo.jpg";
import "./style.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { removeLog } from "../../redux/actions/action";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const isLogged = useSelector((state) => state.login.data);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(removeLog(false));
  };
  const [openMenu, setopenMenu] = useState(false);
  return (
    <header className="container">
      <div className="logo">
        <Link to={"/"}>
          <img src={Logo} alt="Logo" />
          <span>Educate Pro</span>
        </Link>
      </div>
      <div className="navbar">
        <nav className={openMenu ? "hidden" : ""}>
          <ul>
            <li>
              Courses
              <ul className="dropdown">
                <Link to={"/courses"} onClick={() => setopenMenu(false)}>
                  <li onClick={() => setopenMenu(false)}>All courses</li>{" "}
                </Link>
                <Link to={"/coursesLocal"} onClick={() => setopenMenu(false)}>
                  <li>Local Courses</li>
                </Link>
                <Link to={"/coursesForeign"} onClick={() => setopenMenu(false)}>
                  <li onClick={() => setopenMenu(false)}>Foreign courses</li>
                </Link>
              </ul>
            </li>
            <li onClick={() => setopenMenu(false)}>About us</li>
            <li onClick={() => setopenMenu(false)}>Contact</li>
            {isLogged ? (
              <div>
                <button onClick={logout}>Logout</button>
              </div>
            ) : (
              <div className="buttons">
                <li onClick={() => setopenMenu(false)}>
                  <button>
                    <Link to={"/login"}>Login</Link>
                  </button>
                </li>
              </div>
            )}
          </ul>
        </nav>
        <button className="hamburger" onClick={() => setopenMenu(!openMenu)}>
          <MenuIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
