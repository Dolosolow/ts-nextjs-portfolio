import { StyledFooter } from "./styled";

import lang from "@/lang/en.lang";

export const Footer = ({ isRootRoute }: { isRootRoute: boolean }) => (
  <StyledFooter className="f-column-center" $isRootRoute={isRootRoute}>
    <div className="footer__divider" />
    <p>{lang.meta.signed}</p>
  </StyledFooter>
);

export default Footer;
