import { StyledSpinner } from "./styled";

export const Spinner = ({ runAnimation }: { runAnimation: boolean }) => (
  <StyledSpinner className="f-center" style={{ transform: `scale(${runAnimation ? "1" : "0"})` }}>
    <div className="load-spinner" />
  </StyledSpinner>
);
