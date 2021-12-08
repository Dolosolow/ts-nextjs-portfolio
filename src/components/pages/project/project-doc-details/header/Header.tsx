import { ExternalLinkIcon } from "@/components/common/icons";
import { StyledButton } from "@/components/common/styled-button";
import { StyledHeader } from "./styled";

export interface PHProps {
  headline: React.ReactElement;
  imgContainer: React.ReactElement;
  xlink: string;
  liveLink: string;
  pageType: "api" | "mobile";
  desc?: string;
}

export const Header = (props: PHProps) => (
  <StyledHeader className={props.pageType === "api" ? "api-pg" : "mobile-pg"}>
    <div className="header-wrapper">
      <div className="header-wrapper__context f-column-center">
        {props.headline}
        {props.desc && <h4>{props.desc}</h4>}
        <div
          className="btns-container f"
          style={{ justifyContent: props.liveLink.length > 1 ? "space-between" : "center" }}
        >
          <a href={props.xlink} target="_blank" aria-label="view code">
            <StyledButton $background={"#121212"}>View Code</StyledButton>
          </a>
          {props.liveLink.length > 1 && (
            <a href={props.liveLink} target="_blank" rel="noopener noreferrer">
              <StyledButton
                $background={"#121212"}
                $variant="outline"
                style={{ paddingRight: "45px", paddingLeft: "30px" }}
              >
                <span>View Live Demo</span>
                <ExternalLinkIcon
                  fontSize={8}
                  style={{ position: "absolute", marginLeft: "8px", marginTop: "2px" }}
                />
              </StyledButton>
            </a>
          )}
        </div>
      </div>
      <div className="header-wrapper__img">{props.imgContainer}</div>
    </div>
  </StyledHeader>
);
