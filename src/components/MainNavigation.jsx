import { Link, NavLink } from "react-router-dom";
export default function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="products">Product</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
