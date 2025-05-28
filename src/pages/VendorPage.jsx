import React from "react";
import ColorInit from "../helper/ColorInit";
import ScrollToTop from "react-scroll-to-top";
import Preloader from "../helper/Preloader";
import HeaderOne from "../templateComponents/HeaderOne";
import BreadcrumbThree from "../templateComponents/BreadcrumbThree";
import VendorsList from "../templateComponents/VendorsList";
import ShippingOne from "../templateComponents/ShippingOne";
import NewsletterOne from "../templateComponents/NewsletterOne";
import FooterOne from "../templateComponents/FooterOne";
import BottomFooter from "../templateComponents/BottomFooter";

const VendorPage = () => {
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
      <BreadcrumbThree title={"Vendor List"} />

      {/* VendorsList */}
      <VendorsList />

      {/* ShippingOne */}
      <ShippingOne />

      {/* NewsletterOne */}
      <NewsletterOne />

      {/* FooterOne */}
      <FooterOne />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default VendorPage;
