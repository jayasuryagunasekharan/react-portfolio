import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from './NavbarStyledComponent';
import { DiCssdeck } from 'react-icons/di';
import { FaBars, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

// New Styled Components for Desktop Icons
const IconContainer = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 960px) {
    display: none; /* Hide on mobile */
  }
`;

const SocialIconLink = styled.a`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  // Toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            marginBottom: '8px',
            cursor: 'pointer',
          }}
        >
          <DiCssdeck size="3rem" /> 
          <Span>Jay's Portfolio</Span>
        </NavLogo>


        {/* Hamburger Icon for Mobile */}
        <MobileIcon>
          <FaBars onClick={toggleMenu} />
        </MobileIcon>

        {/* Navigation Links */}
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>

        {/* Desktop Social Icons */}
        <IconContainer>
          <SocialIconLink href={Bio.github} target="_blank" aria-label="GitHub">
            <FaGithub />
          </SocialIconLink>
          <SocialIconLink href={Bio.linkedin} target="_blank" aria-label="LinkedIn">
            <FaLinkedin />
          </SocialIconLink>
        </IconContainer>

        {/* Mobile Menu */}
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={toggleMenu}>
              About
            </MobileLink>
            <MobileLink href="#skills" onClick={toggleMenu}>
              Skills
            </MobileLink>
            <MobileLink href="#experience" onClick={toggleMenu}>
              Experience
            </MobileLink>
            <MobileLink href="#projects" onClick={toggleMenu}>
              Projects
            </MobileLink>
            <MobileLink href="#education" onClick={toggleMenu}>
              Education
            </MobileLink>
            {/* Mobile Social Icons (Optional) */}
            {/* 
            <IconContainer as={MobileSocialIconContainer}>
              <SocialIconLink href={Bio.github} target="_blank" aria-label="GitHub">
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href={Bio.linkedin} target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
            </IconContainer>
            */}
          </MobileMenu>
        )}
        {/* Star animation */}
        <div className="star-animation"></div>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
