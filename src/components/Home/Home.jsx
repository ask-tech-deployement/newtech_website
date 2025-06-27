import React from "react";
import Banner from "./Banner";
import ProductSlider from "./ProductSlider";
import PromotionalOneBuroNeel from "./PromotionalOneBuroNeel";
import FeaturedOneHome from "./FeaturedOneHome";
import PromotionalBanner1 from "./PromotionalBanner1";
import Promotional2 from "./Promotional2";
import Collabs from "./Collabs";
import Brands from "./Brands";
// import Preloader from "../../helper/Preloader";

const Home = () => {
  return (
    <>
      {/* <Preloader /> */}
      <Banner />
      <ProductSlider title="Office Stationery" categoryid={6} />
      <Promotional2 />
      <ProductSlider title="Cleaning Supplies" categoryid={11} />
      <PromotionalBanner1 />
      <ProductSlider title="Toners & Inks" categoryid={1} />
      <PromotionalOneBuroNeel />
      <FeaturedOneHome title="Stationaries" categoryid={6} />
      <ProductSlider title="Paper Products" categoryid={4} />
      {/* <Collabs /> */}
      <Brands />
    </>
  );
};

export default Home;
