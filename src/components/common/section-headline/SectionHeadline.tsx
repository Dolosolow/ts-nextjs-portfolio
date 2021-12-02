import { StyledHeadline } from "./styled";

export interface SHProps {
  text: string;
  subText: string;
  spacing?: Pick<React.CSSProperties, "margin" | "marginTop" | "marginBottom">;
}

export const SectionHeadline = ({ text, subText, spacing = {} }: SHProps) => (
  <StyledHeadline style={{ ...spacing }}>
    <div className="f-center">
      <h3 className="sectionheadline__text">{text}</h3>
    </div>
    <h5 className="sectionheadline__subtext">{subText}</h5>
  </StyledHeadline>
);
