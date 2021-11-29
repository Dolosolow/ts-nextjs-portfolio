import { useState, useEffect } from "react";

import { StyledNavContainer, StyledNavbar } from "./styled";

export const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    function updatePosition() {
      if (window.pageYOffset >= 50) {
        setExpanded(true);
      } else {
        setExpanded(false);
      }
    }
    window.addEventListener("scroll", updatePosition);

    return () => window.removeEventListener("scroll", updatePosition);
  }, [expanded]);

  return (
    <StyledNavbar $expanded={expanded}>
      <StyledNavContainer $expanded={expanded}>
        <ul>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </StyledNavContainer>
    </StyledNavbar>
  );
};
