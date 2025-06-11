import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import BottomFooter from "./BottomFooter";
import Footer from "./Footer";
import ColorInit from "./ColorInit";
import Preloader from "./Preloader";
import Header from "./Header";
import Whatsapp from "../Home/Whatsapp";

const Layout = () => {
  return (
    <>
      <ColorInit color={true} />
      {/* <ScrollToTop smooth color="#59b2de" /> */}
      <Preloader />
      <Header />
      <Outlet />
      <Whatsapp />
      <Footer />
      <BottomFooter />
    </>
  );
};

export default Layout;
