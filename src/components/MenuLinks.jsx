import { NavLink } from "react-router-dom";
function MenuLinks() {
  const links = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div>
      {links.map((link) => {
        return (
          <li key={link.id}>
            <NavLink to={link.path}>{link.name}</NavLink>
          </li>
        );
      })}
    </div>
  );
}

export default MenuLinks;
