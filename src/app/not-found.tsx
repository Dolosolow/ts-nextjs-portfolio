'use client';

import NextImage from 'next/image';
import Link from 'next/link';

import { StyledButton } from '@/components/common/styled-button';
import { PageNotFoundWrapper } from '@/styles/pages/styled-404';

import lang from '@/lang/en.lang';

export default function NotFound() {
  return (
    <PageNotFoundWrapper>
      <div className="pnf__bgtext">
        <p>OOPS</p>
      </div>
      <div className="pnf__message">
        <p>Sorry, the page your looking for can&apos;t not be found.</p>
      </div>
      <Link href="/">
        <StyledButton style={{ zIndex: 100 }}>Go Home</StyledButton>
      </Link>
      <div className="pnf__imgwrapper">
        <NextImage
          priority
          src={lang.pageNotFound.images.reg}
          alt="page not found"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </PageNotFoundWrapper>
  );
}
