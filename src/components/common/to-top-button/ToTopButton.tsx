import { useState, useEffect } from "react";
import { animateScroll } from "react-scroll";

import { ChevronUpIcon } from "@/components/common/icons";
import { StyledToTopButton } from "./styled";

export const ToTopButton = ({ isRootRoute }: { isRootRoute: boolean }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function updatePosition() {
      if (window.pageYOffset > 120) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
    window.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);
    updatePosition();

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [show]);

  return (
    <StyledToTopButton
      $show={show}
      $isRootRoute={isRootRoute}
      name="goToTop"
      role="button"
      aria-label="go to top of the page"
      onClick={() => animateScroll.scrollToTop()}
    >
      <span className="aria-invisible">click to scroll to top of the page</span>
      <ChevronUpIcon style={{ userSelect: "none" }} color="#181b25" fontSize={22} />
    </StyledToTopButton>
  );
};
