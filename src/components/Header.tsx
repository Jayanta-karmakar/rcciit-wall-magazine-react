import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [responsive, setResponsive] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setResponsive(!responsive);
  };

  // Close menu when route changes
  useEffect(() => {
    setResponsive(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header>
      <div className={`topnav ${responsive ? "responsive" : ""}`} id="myTopnav">
        <Link to="/" className={isActive("/") ? "active" : ""}>
          Home
        </Link>
        <Link to="/contact" className={isActive("/contact") ? "active" : ""}>
          Contact
        </Link>
        <Link to="/about" className={isActive("/about") ? "active" : ""}>
          About
        </Link>
        <button className="icon" onClick={toggleMenu} aria-label="Toggle menu">
          {responsive ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;
