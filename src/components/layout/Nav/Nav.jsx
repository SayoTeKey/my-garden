import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="main-nav">
      {/* className={({ isActive }) => (isActive ? 'active' : 'inactive')} */}
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        Contact
      </NavLink>
      <NavLink to="/imprint" className="nav-link">
        Impressum
      </NavLink>
      <NavLink to="/privacy" className="nav-link">
        Privacy
      </NavLink>
    </nav>
  );
};

export default Nav;
