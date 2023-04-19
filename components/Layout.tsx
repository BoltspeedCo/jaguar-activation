import * as React from "react";

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return <div className="relative">{children}</div>;
};

export default Layout;
