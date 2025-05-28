import React from "react";
import Preloader from "../helper/Preloader";
import HeaderOne from "../templateComponents/HeaderOne";
import BannerOne from "../templateComponents/BannerOne";
import FeatureOne from "../templateComponents/FeatureOne";
import PromotionalOne from "../templateComponents/PromotionalOne";
import FlashSalesOne from "../templateComponents/FlashSalesOne";
import ProductListOne from "../templateComponents/ProductListOne";
import OfferOne from "../templateComponents/OfferOne";
import RecommendedOne from "../templateComponents/RecommendedOne";
import HotDealsOne from "../templateComponents/HotDealsOne";
import TopVendorsOne from "../templateComponents/TopVendorsOne";
import BestSellsOne from "../templateComponents/BestSellsOne";
import DeliveryOne from "../templateComponents/DeliveryOne";
import OrganicOne from "../templateComponents/OrganicOne";
import ShortProductOne from "../templateComponents/ShortProductOne";
import BrandOne from "../templateComponents/BrandOne";
import NewArrivalOne from "../templateComponents/NewArrivalOne";
import ShippingOne from "../templateComponents/ShippingOne";
import NewsletterOne from "../templateComponents/NewsletterOne";
import FooterOne from "../templateComponents/FooterOne";
import BottomFooter from "../templateComponents/BottomFooter";
import ScrollToTop from "react-scroll-to-top";
import ColorInit from "../helper/ColorInit";
const HomePageOne = () => {

  return (

    <>

      {/* Preloader */}
      <Preloader />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#299E60" />

      {/* ColorInit */}
      <ColorInit color={false} />

      {/* HeaderOne */}
      <HeaderOne />

      {/* BannerOne */}
      <BannerOne />

      {/* FeatureOne */}
      <FeatureOne />

      {/* PromotionalOne */}
      <PromotionalOne />

      {/* FlashSalesOne */}
      <FlashSalesOne />

      {/* ProductListOne */}
      <ProductListOne />

      {/* OfferOne */}
      <OfferOne />

      {/* RecommendedOne */}
      <RecommendedOne />

      {/* HotDealsOne */}
      <HotDealsOne />

      {/* TopVendorsOne */}
      <TopVendorsOne />

      {/* BestSellsOne */}
      <BestSellsOne />

      {/* DeliveryOne */}
      <DeliveryOne />

      {/* OrganicOne */}
      <OrganicOne />

      {/* ShortProductOne */}
      <ShortProductOne />

      {/* BrandOne */}
      <BrandOne />

      {/* NewArrivalOne */}
      <NewArrivalOne />

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

export default HomePageOne;
