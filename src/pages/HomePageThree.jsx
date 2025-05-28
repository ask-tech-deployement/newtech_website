import React from "react";
import Preloader from "../helper/Preloader";
import ColorInit from "../helper/ColorInit";
import ScrollToTop from "react-scroll-to-top";
import HeaderThree from "../templateComponents/HeaderThree";
import BannerThree from "../templateComponents/BannerThree";
import PromotionalThree from "../templateComponents/PromotionalThree";
import FeatureThree from "../templateComponents/FeatureThree";
import TextSlider from "../templateComponents/TextSlider";
import TrendingThree from "../templateComponents/TrendingThree";
import DiscountThree from "../templateComponents/DiscountThree";
import NewArrivalThree from "../templateComponents/NewArrivalThree";
import DealsSection from "../templateComponents/DealsSection";
import PopularProductsThree from "../templateComponents/PopularProductsThree";
import BrandThree from "../templateComponents/BrandThree";
import ShippingThree from "../templateComponents/ShippingThree";
import TestimonialOne from "../templateComponents/TestimonialOne";
import InstagramSection from "../templateComponents/InstagramSection";
import NewsletterThree from "../templateComponents/NewsletterThree";
import FooterThree from "../templateComponents/FooterThree";

const HomePageThree = () => {
  return (
    <>
      {/* ColorInit */}
      <ColorInit color={true} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color='#FA6400' />

      {/* Preloader */}
      <Preloader />

      {/* HeaderThree */}
      <HeaderThree />

      {/* BannerThree */}
      <BannerThree />

      {/* PromotionalThree */}
      <PromotionalThree />

      {/* FeatureThree */}
      <FeatureThree />

      {/* TextSlider */}
      <TextSlider />

      {/* TrendingThree */}
      <TrendingThree />

      {/* DiscountThree */}
      <DiscountThree />

      {/* NewArrivalThree */}
      <NewArrivalThree />

      {/* DealsSection */}
      <DealsSection />

      {/* PopularProductsThree */}
      <PopularProductsThree />

      {/* BrandThree */}
      <BrandThree />

      {/* ShippingThree */}
      <ShippingThree />

      {/* TestimonialOne */}
      <TestimonialOne />

      {/* InstagramSection */}
      <InstagramSection />

      {/* NewsletterThree */}
      <NewsletterThree />

      {/* FooterThree */}
      <FooterThree />
    </>
  );
};

export default HomePageThree;
