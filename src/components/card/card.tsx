import { useRef } from "react";
import { SpringValue } from "react-spring";
import { NavLink } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { useIntersectionObserver } from "hooks/useIntersectionObserver";
import { StyledCard, StyledButton } from "./styled";
import { JRMProject } from "types/index";

interface CProps {
  data: JRMProject;
  style: {
    opacity: any;
    y: SpringValue<number>;
  };
}

export const Card = ({ data, style: { opacity, y } }: CProps) => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const { nodeVisible } = useIntersectionObserver(nodeRef);

  return (
    <StyledCard
      ref={nodeRef}
      $background={data.color}
      style={{
        opacity,
        transform: y.to((y) => `translate3d(0,${y}px,0)`),
      }}
    >
      <div className="card__content">
        <h2 className="card__title">
          <span>{data.name}</span>&nbsp;{data.subName}
        </h2>
        <p className="card__desc">{data.caption}</p>
        <div className="card__btns">
          <NavLink to={`/project/${data.id}`}>
            <StyledButton $background={data.color}>Details</StyledButton>
          </NavLink>
          <StyledButton
            $background={data.color}
            $variant="outline"
            style={{ paddingRight: "20px" }}
          >
            <span>See the live</span>
            <ExitToAppIcon fontSize="large" style={{ position: "absolute", marginLeft: "5px" }} />
          </StyledButton>
        </div>
      </div>
      <div className="card__img" style={{ backgroundColor: data.color }}>
        {nodeVisible && <img crossOrigin="anonymous" src={data.imgUrl} alt={data.name} />}
      </div>
    </StyledCard>
  );
};
