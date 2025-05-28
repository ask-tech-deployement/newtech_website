import React from "react";
import Preloader from "../helper/Preloader";
import ColorInit from "../helper/ColorInit";
import HeaderTwo from "../templateComponents/HeaderTwo";
import Breadcrumb from "../templateComponents/Breadcrumb";
import ProductDetailsTwo from "../templateComponents/ProductDetailsTwo";
import NewArrivalTwo from "../templateComponents/NewArrivalTwo";
import ShippingOne from "../templateComponents/ShippingOne";
import NewsletterOne from "../templateComponents/NewsletterOne";
import FooterTwo from "../templateComponents/FooterTwo";
import BottomFooter from "../templateComponents/BottomFooter";
import ScrollToTop from "react-scroll-to-top";


const ProductDetailsPageTwo = () => {



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
      <Breadcrumb title={"Product Details"} />

      {/* ProductDetailsTwo */}
      <ProductDetailsTwo />

      {/* NewArrivalTwo */}
      <NewArrivalTwo />

      {/* ShippingOne */}
      <ShippingOne />

      {/* NewsletterOne */}
      <NewsletterOne />

      {/* FooterTwo */}
      <FooterTwo />

      {/* BottomFooter */}
      <BottomFooter />


    </>
  );
};

export default ProductDetailsPageTwo;
