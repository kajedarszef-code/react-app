import { Link, NavLink } from "react-router-dom";
import "./nav.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/themecontext";


export function Nav() {
  const {theme, toogleTheme} = useContext(ThemeContext);



  const navLinks = [
    {
      path: "/",
      name: "NEWS",
      icon: "fa-solid fa-newspaper",
    },
    {
      path: "/dashboard",
      name: "DASHBOARD",
      icon: "fa-solid fa-gauge",
    },
    {
      path: "/users",
      name: "USERS",
      icon: "fa-solid fa-pizza-slice",
    },
  ];

  const handleInput = (e) => {
    console.log("kliknięto: ", e.target.value);
  };

  return (
    <nav>
    <nav className={theme}>
      <span>
        <a href="/">
          <i className="fa-brands fa-apple"></i>
        </a>
      </span>

      <ul>
        <li>

        <button className="theme-btn" onClick={toogleTheme}>
            {theme === "light" ? (
              <i className="fa-solid fa-moon"></i>
            ) : (
              <i className="fa-solid fa-sun"></i>
            )}
          </button>
          </li>
        <li>
          <input placeholder="search" onChange={handleInput}></input>
        </li>
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? "active" : "non-active")}
            >
              <i className={link.icon}></i>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
    </nav>
  );
}
