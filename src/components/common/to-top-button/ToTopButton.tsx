import { useState, useEffect } from "react";
import { animateScroll } from "react-scroll";

import { ChevronUpIcon } from "@/components/common/icons";
import { StyledButton } from "./styled";

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
    <StyledButton
      $show={show}
      $isRootRoute={isRootRoute}
      onClick={() => animateScroll.scrollToTop()}
    >
      <ChevronUpIcon color="#181b25" fontSize={22} />
    </StyledButton>
  );
};
