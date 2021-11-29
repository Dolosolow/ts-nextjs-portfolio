import styled from "styled-components";
import { StyledProps } from "@/styles/styled";

export const StyledCopyButton = styled.div`
  background-color: #42485c;
  border: 2px solid transparent;
  cursor: pointer;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  transition: all 0.25s ease-in-out;
  width: max-content;
  z-index: 10;

  :hover {
    border: 2px solid #dd457c;
  }
`;

export const StyledButtonContainer = styled.div<StyledProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 330px;

  span:first-of-type {
    color: ${({ theme: { colors } }) => `${colors.primary}`};
    font-size: 20px;
  }

  span:last-of-type {
    transform: translateX(-100px);
    z-index: 0;
  }

  span {
    transition: all 0.3s ease-in-out;
  }
`;
