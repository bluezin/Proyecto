import React from "react";
import { Head } from "./Head";
import Footer from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div>
      <Head />
      {children}
      <Footer />
    </div>
  );
};
