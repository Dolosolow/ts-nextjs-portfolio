import styled, { css } from "styled-components";

import { LayoutLimiter } from "@/styles/styled";

export const LayoutAboutLimiter = styled(LayoutLimiter)`
  ${({ theme: { colors } }) => {
    return css`
      margin-bottom: 2rem;

      .section-content {
        color: ${colors.smokedWhite};
        justify-content: space-between;
        width: 100%;
        margin: 5rem 0;

        &__title {
          align-self: flex-start;
          color: ${colors.white};
          font-size: 3rem;
          font-weight: 500;
        }

        &__aboutme-text {
          line-height: 1.65;
          width: 70%;
        }
      }

      @media only screen and (max-width: ${750 / 16}em) {
        margin-bottom: 5rem;

        .section-content {
          align-items: flex-start;
          flex-direction: column;

          &__title {
            margin-bottom: 3rem;
            font-size: 2.5rem;
          }

          &__aboutme-text {
            font-size: 1.4rem;
            width: 100%;
          }
        }
      }
    `;
  }}
`;

export const SocialLinkWrapper = styled.div`
  align-self: flex-end;
  justify-content: space-between;
  width: 70%;

  .social-links {
    margin: 1.5rem 0 0 0;

    a {
      color: #fafafa;
      display: inline-block;
      font-size: 2.5rem;
      transition: all 0.3s ease-in-out;

      :not(:last-of-type) {
        margin-right: 2rem;
      }

      :hover {
        color: ${({ theme: { colors } }) => colors.primary};
        transform: translateY(-0.5rem);
      }
    }
  }

  @media only screen and (max-width: ${750 / 16}em) {
    align-self: flex-start;
  }
`;
