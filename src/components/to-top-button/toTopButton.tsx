import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import { StyledButton } from "./styled";

export const ToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function updatePosition() {
      if (window.pageYOffset > 90 && window.outerWidth > 1360) {
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
    <StyledButton $show={show}>
      <a href="#top">
        <FontAwesomeIcon icon={faChevronUp} size="2x" />
      </a>
    </StyledButton>
  );
};
