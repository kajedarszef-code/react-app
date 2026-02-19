import { Link, NavLink } from "react-router-dom";
import "./nav.css";

export function Nav() {
  const handleInput = (e) => {
    console.log("kliknięto: ", e.target.value);
  };

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

  return (
    <nav>
      <span>
        <a href="/">
          <i className="fa-brands fa-apple"></i>
        </a>
      </span>

      <ul>
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
  );
}
