import { useState } from "react";
import logo_img from "./images/logo.png";
import { HashLink } from "react-router-hash-link";
import "font-awesome/css/font-awesome.min.css";
import "./Navbar.css";
const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  const closeMobileMenu = () => {
    setActive(false);
  };
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <HashLink to="/#home">
            <img src={logo_img} alt="om dental clinic logo" />
          </HashLink>
          <h2>Consultorio Dental-OMs</h2>
        </div>
        <div className={isActive ? "active_links" : "links"}>
          <div className="MenuItems">
            <HashLink to="/#home" onClick={closeMobileMenu}>
              Inicio
            </HashLink>
          </div>
          <div className="MenuItems">
            <HashLink to="/#about-doctors" onClick={closeMobileMenu}>
              Informacion
            </HashLink>
          </div>
          <div className="MenuItems">
            <HashLink to="/#our-services" onClick={closeMobileMenu}>
              Tratamientos
            </HashLink>
          </div>
          <div className="MenuItems" id="Appointment_menu">
            <HashLink to="/home/dental-clinic/slot" onClick={closeMobileMenu}>
              Citas
            </HashLink>
          </div>
          <div className="MenuItems">
            <HashLink to="/#contact-us" onClick={closeMobileMenu}>
              Contactenos
            </HashLink>
          </div>
          <div className="MenuItems">
            <HashLink to="/home/login" onClick={closeMobileMenu}>
              Login
            </HashLink>
          </div>
        </div>
        <div className="toggle_menu_icons" onClick={handleClick}>
          <i className={isActive ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
