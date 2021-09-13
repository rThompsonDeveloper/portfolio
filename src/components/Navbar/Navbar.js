import { useState } from "react";

import {
  Nav,
  NavLink,
  NavMenu,
  NavMenuIcon,
  NavBtnLink,
  Chat,
  ButtonText,
  NavMenuWrapper,
  LogoImg,
  LogoLink,
} from "./Styles.js";

// Images
import Logo from "../../Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavBtnLink to="contact" smooth={true} spy={true} duration={1000}>
        <Chat />
        <ButtonText>Let's Talk</ButtonText>
      </NavBtnLink>
      <Nav>
        <NavMenuWrapper>
          <LogoLink to="navbar">
            <LogoImg src={Logo} />
            <h3>Robfolio</h3>
          </LogoLink>
          <NavMenuIcon onClick={openHandler} />
          <NavMenu open={isOpen}>
            <NavLink
              to="projects"
              smooth={true}
              spy={true}
              duration={1000}
              offset={-100}
            >
              Projects
            </NavLink>
            <NavLink
              to="skills"
              smooth={true}
              spy={true}
              duration={1000}
              offset={-170}
            >
              Skills
            </NavLink>
            <NavLink
              to="testimonials"
              smooth={true}
              spy={true}
              duration={1000}
              offset={-80}
            >
              Testimonials
            </NavLink>
            <NavLink
              to="contact"
              smooth={true}
              spy={true}
              duration={1000}
              offset={-80}
            >
              About
            </NavLink>
          </NavMenu>
        </NavMenuWrapper>
      </Nav>
    </>
  );
};

export default Navbar;
