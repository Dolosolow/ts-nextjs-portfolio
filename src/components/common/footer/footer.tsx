import { StyledFooter } from "./styled";

export const Footer = ({ isRootRoute }: { isRootRoute: boolean }) => (
  <StyledFooter className="f-column-center" $isRootRoute={isRootRoute}>
    <div className="footer__divider" />
    <p>Desgined &amp; Built by Jose R. Munoz</p>
  </StyledFooter>
);

export default Footer;
