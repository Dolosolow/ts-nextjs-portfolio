import React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const DynamicFooter = dynamic<{ isRootRoute: boolean }>(() =>
  import("src/components/common/footer").then((mod) => mod.Footer)
);
const DynamicNavbar = dynamic<{ isRootRoute: boolean }>(() =>
  import("src/components/common/navbar").then((mod) => mod.Navbar)
);
const DynamicToTopButton = dynamic<{ isRootRoute: boolean }>(() =>
  import("src/components/common/to-top-button").then((mod) => mod.ToTopButton)
);

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { query } = useRouter();

  return (
    <>
      <DynamicNavbar isRootRoute={!query["api"]} />
      {children}
      <DynamicToTopButton isRootRoute={!query["api"]} />
      <DynamicFooter isRootRoute={!query["api"]} />
    </>
  );
};

export default Layout;
