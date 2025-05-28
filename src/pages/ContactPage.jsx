import React from "react";
import Preloader from "../helper/Preloader";
import ColorInit from "../helper/ColorInit";
import HeaderTwo from "../templateComponents/HeaderTwo";
import Breadcrumb from "../templateComponents/Breadcrumb";
import FooterTwo from "../templateComponents/FooterTwo";
import BottomFooter from "../templateComponents/BottomFooter";
import ShippingOne from "../templateComponents/ShippingOne";
import Contact from "../templateComponents/Contact";
import ScrollToTop from "react-scroll-to-top";
const ContactPage = () => {
  return (
    <>
      {/* ColorInit */}
      <ColorInit color={true} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#FA6400" />

      {/* Preloader */}
      <Preloader />

      {/* HeaderTwo */}
      <HeaderTwo category={true} />

      {/* Breadcrumb */}
      <Breadcrumb title={"Contact"} />

      {/* Contact */}
      <Contact />

      {/* ShippingOne */}
      <ShippingOne />

      {/* FooterTwo */}
      <FooterTwo />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default ContactPage;
