'use client';

import React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';

const DynamicFooter = dynamic<{ isRootRoute: boolean }>(() =>
  import('src/components/common/footer').then((mod) => mod.Footer)
);
const DynamicNavbar = dynamic<{ isRootRoute: boolean }>(() =>
  import('src/components/common/navbar').then((mod) => mod.Navbar)
);
const DynamicToTopButton = dynamic<{ isRootRoute: boolean }>(() =>
  import('src/components/common/to-top-button').then((mod) => mod.ToTopButton)
);

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const hasDoc = searchParams.get('doc') !== null;
  const hasWeb = searchParams.get('web') !== null;
  const isRootRoute = pathname === '/';

  return (
    <>
      <DynamicNavbar isRootRoute={isRootRoute && !hasDoc && !hasWeb} />
      {children}
      <DynamicToTopButton isRootRoute={isRootRoute || !hasDoc} />
      <DynamicFooter isRootRoute={isRootRoute || !hasDoc} />
    </>
  );
};

export default Layout;
