import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

import { SlideLeftLink } from "@/components/common/slide-left-link/SlideLeftLink";
import { ArrowLeftIcon } from "@/components/common/icons";
import { StyledNavContainer, StyledNavbar } from "./styled";

import { capitalize } from "@/utils/capitalize";

export const Navbar = ({ isRootRoute }: { isRootRoute: boolean }) => {
  const [expanded, setExpanded] = useState(false);
  const [currentSection, setCurrentSection] = useState("header");

  const renderNavLinks = () => {
    return isRootRoute ? (
      <ul role="list">
        <span className="aria-invisible">current section: {currentSection}</span>
        {["projects", "about"].map((section) => (
          <li key={section}>
            <Link
              spy
              smooth
              tabIndex={0}
              role="link"
              activeClass="active-section"
              aria-label={`scroll to ${section} section`}
              to={section}
              offset={-55}
              onSetActive={(section) => setCurrentSection(section)}
            >
              {capitalize(section)}
            </Link>
          </li>
        ))}
      </ul>
    ) : (
      <SlideLeftLink
        href="/"
        icon={<ArrowLeftIcon fontSize={20} className="back-btn" />}
        linkText="Go Back"
      />
    );
  };

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
    <StyledNavbar className="f-center" $expanded={expanded}>
      <StyledNavContainer $expanded={expanded} $isRootRoute={isRootRoute}>
        {renderNavLinks()}
      </StyledNavContainer>
    </StyledNavbar>
  );
};
