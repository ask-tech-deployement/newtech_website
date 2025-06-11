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
      <ProductSlider title="Office Stationery" categoryid={1} />
      <Promotional2 />
      <ProductSlider title="Computer Accessories" categoryid={3} />
      <PromotionalBanner1 />
      <ProductSlider title="Computer Accessories" categoryid={3} />
      <PromotionalOneBuroNeel />
      <FeaturedOneHome title="Stationeries" categoryid={10015} />
      <ProductSlider title="Computer Accessories" categoryid={3} />
      {/* <Collabs /> */}
      <Brands />
    </>
  );
};

export default Home;
