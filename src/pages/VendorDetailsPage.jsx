import React from "react";
import Preloader from "../helper/Preloader";
import ColorInit from "../helper/ColorInit";
import ScrollToTop from "react-scroll-to-top";
import HeaderOne from "../templateComponents/HeaderOne";
import BreadcrumbThree from "../templateComponents/BreadcrumbThree";
import VendorsListTwo from "../templateComponents/VendorsListTwo";
import NewsletterOne from "../templateComponents/NewsletterOne";
import FooterOne from "../templateComponents/FooterOne";
import BottomFooter from "../templateComponents/BottomFooter";

const VendorDetailsPage = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* ColorInit */}
      <ColorInit color={false} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color='#299E60' />

      {/* HeaderOne */}
      <HeaderOne />

      {/* BreadcrumbThree */}
      <BreadcrumbThree title={"Vendor Details"} />

      {/* VendorsListTwo */}
      <VendorsListTwo />

      {/* NewsletterOne */}
      <NewsletterOne />

      {/* FooterOne */}
      <FooterOne />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default VendorDetailsPage;
