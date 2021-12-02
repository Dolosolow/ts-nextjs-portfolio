import styled from "styled-components";

import { StyledContainer } from "@/styles/styled";

export const StyledCLContainer = styled(StyledContainer)`
  flex-direction: column;
  width: 90%;

  @media only screen and (max-width: ${({ theme: { mediaPx } }) => mediaPx.tabLand / 16}em) {
    width: 94%;
  }
`;

export const StyledCardList = styled.div`
  padding: 7rem 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.rasinBlack};
  position: relative;
  z-index: 5;
`;
