import React from "react";
import { StyledContainer } from "styles/styled";
import { StyledFooter } from "./styled";

const Footer: React.FC = () => {
  return (
    <StyledContainer>
      <StyledFooter>
        <p>Desgined &amp; Built by Jose R. Munoz</p>
      </StyledFooter>
    </StyledContainer>
  );
};

export default Footer;
