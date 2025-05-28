import React from "react";
import Preloader from "../helper/Preloader";
import HeaderOne from "../templateComponents/HeaderOne";
import ProductDetailsOne from "../templateComponents/ProductDetailsOne";
import NewArrivalTwo from "../templateComponents/NewArrivalTwo";
import ShippingOne from "../templateComponents/ShippingOne";
import NewsletterOne from "../templateComponents/NewsletterOne";
import FooterOne from "../templateComponents/FooterOne";
import BottomFooter from "../templateComponents/BottomFooter";
import BreadcrumbTwo from '../templateComponents/BreadcrumbTwo';
import ScrollToTop from "react-scroll-to-top";
import ColorInit from "../helper/ColorInit";

const ProductDetailsPageOne = () => {



  return (
    <>

      {/* Preloader */}
      <Preloader />

      {/* ColorInit */}
      <ColorInit color={false} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#299E60" />

      {/* HeaderOne */}
      <HeaderOne />

      {/* Breadcrumb */}
      <BreadcrumbTwo title={"Product Details"} />

      {/* ProductDetailsOne */}
      <ProductDetailsOne />

      {/* NewArrivalTwo */}
      <NewArrivalTwo />

      {/* ShippingOne */}
      <ShippingOne />

      {/* NewsletterOne */}
      <NewsletterOne />

      {/* FooterTwo */}
      <FooterOne />

      {/* BottomFooter */}
      <BottomFooter />



    </>
  );
};

export default ProductDetailsPageOne;
