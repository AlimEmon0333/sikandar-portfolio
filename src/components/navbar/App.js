import { FaBars } from "react-icons/fa";
import { useState } from "react";
import {
  Nav,
  NavItems,
  NavLink,
  NavLogo,
  NavContainer,
  Span,
  MobileMenu,
  MobileIcon,
  GitHubButton,
  MobileMenuLinks,
  ButtonContainer,
} from "./styledComponents";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20",
              cursor: "pointer",
            }}
          >
            <Span><img src={require("../../images/logo.png")} alt="" /></Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setOpen(!open)} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#certifications">certifications</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href="/" target="_blank">
            Linked In
          </GitHubButton>
        </ButtonContainer>
      </NavContainer>
      {open && (
        <MobileMenu open={open}>
          <MobileMenuLinks href="#about" onClick={() => setOpen(!open)}>
            About
          </MobileMenuLinks>
          <MobileMenuLinks href="#skills" onClick={() => setOpen(!open)}>
            Skills
          </MobileMenuLinks>
          <MobileMenuLinks href="#experience" onClick={() => setOpen(!open)}>
            Experience
          </MobileMenuLinks>
          <MobileMenuLinks href="#projects" onClick={() => setOpen(!open)}>
            Projects
          </MobileMenuLinks>
          <MobileMenuLinks
            href="#certifications"
            onClick={() => setOpen(!open)}
          >
            certifications
          </MobileMenuLinks>
          <MobileMenuLinks href="#education" onClick={() => setOpen(!open)}>
            Education
          </MobileMenuLinks>
          <GitHubButton
            style={{
              padding: "10px 16px",
              color: "white",
              width: "max-content",
            }}
            href="/"
            target="_blank"
            onClick={() => setOpen(!open)}
          >
            Linked in
          </GitHubButton>
        </MobileMenu>
      )}
    </Nav>
  );
};
export default Navbar;
