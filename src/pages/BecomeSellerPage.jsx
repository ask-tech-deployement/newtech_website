import React from "react";
import ColorInit from "../helper/ColorInit";
import ScrollToTop from "react-scroll-to-top";
import Preloader from "../helper/Preloader";
import HeaderTwo from "../templateComponents/HeaderTwo";
import Breadcrumb from "../templateComponents/Breadcrumb";
import BreadcrumbImage from "../templateComponents/BreadcrumbImage";
import WhyBecomeSeller from "../templateComponents/WhyBecomeSeller";
import CounterSection from "../templateComponents/CounterSection";
import StepsSection from "../templateComponents/StepsSection";
import TestimonialOne from "../templateComponents/TestimonialOne";
import ShippingOne from "../templateComponents/ShippingOne";
import FooterTwo from "../templateComponents/FooterTwo";
import BottomFooter from "../templateComponents/BottomFooter";

const BecomeSellerPage = () => {
  return (
    <>
      {/* ColorInit */}
      <ColorInit color={true} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color='#FA6400' />

      {/* Preloader */}
      <Preloader />

      {/* HeaderTwo */}
      <HeaderTwo category={true} />

      {/* Breadcrumb */}
      <Breadcrumb title={"Become Seller"} />

      {/* BreadcrumbImage */}
      <BreadcrumbImage />

      {/* WhyBecomeSeller */}
      <WhyBecomeSeller />

      {/* CounterSection */}
      <CounterSection />

      {/* StepsSection */}
      <StepsSection />

      {/* TestimonialOne */}
      <section className='pb-120'>
        <TestimonialOne />
      </section>

      {/* ShippingOne */}
      <ShippingOne />

      {/* FooterTwo */}
      <FooterTwo />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default BecomeSellerPage;
