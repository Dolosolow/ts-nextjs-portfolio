import NextImage from "next/image";
import Link from "next/link";

import { StyledButton } from "@/components/styled-button";
import {
  MainWrapper,
  BgImageText,
  MessageWrapper,
  BgImageWrapper,
} from "@/styles/pages/styled-404";

const Page404 = () => (
  <MainWrapper>
    <BgImageText>
      <p>OOPS</p>
    </BgImageText>
    <MessageWrapper>
      <p>Sorry, the page your looking for can't not be found.</p>
    </MessageWrapper>
    <Link href="/">
      <StyledButton style={{ zIndex: 100 }}>Go Home</StyledButton>
    </Link>
    <BgImageWrapper>
      <NextImage
        priority
        src="/images/png/404page.png"
        alt="page not found"
        objectFit="cover"
        layout="fill"
      />
    </BgImageWrapper>
  </MainWrapper>
);

export default Page404;
