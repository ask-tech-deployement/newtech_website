import React from "react";
import Preloader from "../helper/Preloader";
import HeaderTwo from "../templateComponents/HeaderTwo";
import BannerTwo from "../templateComponents/BannerTwo";
import PromotionalTwo from "../templateComponents/PromotionalTwo";
import DealsOne from "../templateComponents/DealsOne";
import TopSellingOne from "../templateComponents/TopSellingOne";
import TrendingOne from "../templateComponents/TrendingOne";
import DiscountOne from "../templateComponents/DiscountOne";
import FeaturedOne from "../templateComponents/FeaturedOne";
import BigDealOne from "../templateComponents/BigDealOne";
import TopSellingTwo from "../templateComponents/TopSellingTwo";
import PopularProductsOne from "../templateComponents/PopularProductsOne";
import TopVendorsTwo from "../templateComponents/TopVendorsTwo";
import DaySaleOne from "../templateComponents/DaySaleOne";
import RecentlyViewedOne from "../templateComponents/RecentlyViewedOne";
import BrandTwo from "../templateComponents/BrandTwo";
import ShippingTwo from "../templateComponents/ShippingTwo";
import NewsletterTwo from "../templateComponents/NewsletterTwo";
import FooterTwo from "../templateComponents/FooterTwo";
import BottomFooter from "../templateComponents/BottomFooter";
import ColorInit from "../helper/ColorInit";
import ScrollToTop from "react-scroll-to-top";

const HomePageTwo = () => {


  return (

    <>
      {/* ColorInit */}
      <ColorInit color={true} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#FA6400" />

      {/* Preloader */}
      <Preloader />

      {/* HeaderTwo */}
      <HeaderTwo category={false} />

      {/* BannerTwo */}
      <BannerTwo />

      {/* PromotionalTwo */}
      <PromotionalTwo />

      {/* DealsOne */}
      <DealsOne />

      {/* TopSellingOne */}
      <TopSellingOne />

      {/* TrendingOne */}
      <TrendingOne />

      {/* DiscountOne */}
      <DiscountOne />

      {/* FeaturedOne */}
      <FeaturedOne />

      {/* BigDealOne */}
      <BigDealOne />

      {/* TopSellingTwo */}
      <TopSellingTwo />

      {/* PopularProductsOne */}
      <PopularProductsOne />

      {/* TopVendorsTwo */}
      <TopVendorsTwo />

      {/* DaySaleOne */}
      <DaySaleOne />

      {/* RecentlyViewedOne */}
      <RecentlyViewedOne />

      {/* BrandTwo */}
      <BrandTwo />

      {/* ShippingTwo */}
      <ShippingTwo />

      {/* NewsletterTwo */}
      <NewsletterTwo />

      {/* FooterTwo */}
      <FooterTwo />

      {/* BottomFooter */}
      <BottomFooter />


    </>
  );
};

export default HomePageTwo;
