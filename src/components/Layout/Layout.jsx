import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import BottomFooter from "./BottomFooter";
import Footer from "./Footer";
import ColorInit from "./ColorInit";
import Preloader from "./Preloader";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <ColorInit color={true} />
      <ScrollToTop smooth color="#FA6400" />
      <Preloader />
      <Header />
      <Outlet />
      <Footer />
      <BottomFooter />
    </>
  );
};

export default Layout;
