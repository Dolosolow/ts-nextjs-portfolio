import styled, { css } from "styled-components";
import { StyledProps } from "styles/styled";

export const PageContainer = styled.div<StyledProps>`
  background-color: #393b3d56;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 100px 0;
  height: 100%;
`;

export const ImageWrapper = styled.div<StyledProps>`
  ${({ theme: { mediaPx } }) => {
    return css`
      width: 83%;

      img {
        border-radius: 20px;
      }

      @media only screen and (max-width: ${mediaPx.tabLand / 16}em) {
        width: 100%;

        img {
          border-radius: 0;
        }
      }
    `;
  }}
`;

export const InfoCard = styled.div<StyledProps>`
  ${({ theme: { mediaPx } }) => {
    return css`
      background-color: #49565c5f;
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 83%;
      width: 93%;
      height: 120px;
      margin-top: 30px;
      border-radius: 20px;
      padding: 40px;
      color: white;

      @media only screen and (max-width: ${mediaPx.tabPort / 16}em) {
        max-width: 93%;
      }

      @media only screen and (max-width: ${750 / 16}em) {
        max-width: 93%;
      }
    `;
  }}
`;
