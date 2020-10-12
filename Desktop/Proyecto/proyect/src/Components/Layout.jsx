import React from "react";
import { Home } from "./Home";
import Footer from "./Footer";

export const Layout = ({children}) => {
  return (
    <div>
      <Home />
      {children}
      <Footer />
    </div>
  );
};
