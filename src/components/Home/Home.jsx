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
      <PromotionalOneBuroNeel />
      <FeaturedOneHome title="Stationeries" categoryid={10015} />
      <Promotional2 />
      <ProductSlider title="Office Stationery" categoryid={1} />
      <PromotionalBanner1 />
      <Collabs />
      <ProductSlider title="Computer Accessories" categoryid={3} />
      <Brands />
    </>
  );
};

export default Home;
