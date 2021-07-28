import React, { useState } from "react";
import { SpringValue } from "react-spring";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { faPaintRoller } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { StyledCard, StyledButton } from "./styled";
import { JRMProject } from "../../types/index";

interface Props {
  data: JRMProject;
  style: {
    opacity: any;
    y: SpringValue<number>;
  };
}

const Card: React.FC<Props> = ({ data, style: { opacity, y } }) => {
  const [index, setIndex] = useState(0);

  const color = [data.color, data.subColor];

  return (
    <StyledCard
      $background={color[index]}
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
          <StyledButton $background={color[index]}>Details</StyledButton>
          <StyledButton
            $background={color[index]}
            $variant="outline"
            style={{ paddingRight: "20px" }}
          >
            <span>See the live</span>
            <ExitToAppIcon fontSize="large" style={{ position: "absolute", marginLeft: "5px" }} />
          </StyledButton>
          <button
            onClick={() => setIndex((prevState) => (prevState === 0 ? 1 : 0))}
            style={{
              alignSelf: "center",
              background: "transparent",
              borderRadius: "50%",
              border: "1px solid #eee",
              height: "40px",
              width: "40px",
            }}
          >
            <FontAwesomeIcon icon={faPaintRoller} style={{ color: "#eee" }} />
          </button>
        </div>
      </div>
      <div className="card__img">
        <img src={data.imgUrl} alt={data.name} />
      </div>
    </StyledCard>
  );
};

export default Card;

// import React, { useState } from "react";
// import { SpringValue } from "react-spring";
// import ExitToAppIcon from "@material-ui/icons/ExitToApp";

// import { StyledCard, StyledButton } from "./styled";
// import { JRMProject } from "../../types/index";

// interface Props {
//   data: JRMProject;
//   style: {
//     opacity: any;
//     y: SpringValue<number>;
//   };
// }

// const Card: React.FC<Props> = ({ data, style: { opacity, y } }) => {
//   const [color, setColor] = useState(data.color);

//   return (
//     <StyledCard
//       $background={data.color}
//       style={{
//         opacity,
//         transform: y.to((y) => `translate3d(0,${y}px,0)`),
//       }}
//     >
//       <div className="card__content">
//         <h2 className="card__title">
//           <span>{data.name}</span>&nbsp;{data.subName}
//         </h2>
//         <p className="card__desc">{data.caption}</p>
//         <div className="card__btns">
//           <StyledButton $background={data.color}>Details</StyledButton>
//           <StyledButton
//             $background={data.color}
//             $variant="outline"
//             style={{ paddingRight: "20px" }}
//           >
//             <span>See the live</span>
//             <ExitToAppIcon fontSize="large" style={{ position: "absolute", marginLeft: "5px" }} />
//           </StyledButton>
//         </div>
//       </div>
//       <div className="card__img">
//         <img src={data.imgUrl} alt={data.name} />
//       </div>
//     </StyledCard>
//   );
// };

// export default Card;
