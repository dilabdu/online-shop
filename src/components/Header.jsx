import { NavLink, Link } from "react-router-dom";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { useLogOut } from "../hooks/useLogOut";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Header() {
  const { user } = useContext(GlobalContext);
  const { isPending, _logout } = useLogOut();
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
        <div className="navbar-end gap-5">
          <p className="shrink-0">Hello, {user.displayName}</p>
          <NavLink to="/profile">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                <img src={user.photoURL} alt={`${user.displayName}'s avatar`} />
              </div>
            </div>
          </NavLink>
          <Link to="/create" className="btn btn-primary">
            Create
          </Link>
          {!isPending && (
            <button onClick={_logout} className="btn btn-outline btn-secondary">
              <IoArrowForwardCircleOutline className="text-3xl" />
            </button>
          )}
          {isPending && (
            <button
              disabled
              onClick={_logout}
              className="btn btn-outline btn-secondary"
            >
              <IoArrowForwardCircleOutline className="text-3xl" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
