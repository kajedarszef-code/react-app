import { Link } from "react-router-dom";
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
        <li>
          <Link to="/dashboard">
            <i className="fa-solid fa-gauge"></i>
            DASHBOARD
          </Link>
        </li>
        <li>
          <Link to="/">
            <i className="fa-solid fa-newspaper"></i>
            NEWS
          </Link>
        </li>
        <li>
          <Link to="/users">
            <i className="fa-solid fa-pizza-slice"></i>
            USERS
          </Link>
        </li>
      </ul>
    </nav>
  );
}
