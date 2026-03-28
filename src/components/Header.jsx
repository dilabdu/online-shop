import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-base-300">
      <div className="navbar align-content">
        <div className="navbar-start">
          <img
            src="https://img.freepik.com/vektoren-premium/online-shop-logo-vorlage_59362-81.jpg"
            alt="Logo"
            width={70}
            height={70}
            className="rounded-full"
          />
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/create" className="btn btn-primary">
            Create
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
