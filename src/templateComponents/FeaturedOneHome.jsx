/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import noimg from "../assets/cart/noimg.png";
import chairo from "../assets/banner/banner-img5.png";
import axios, { imageURL } from "../axios";
import QuantityControl from "../components/Cart/QuantityControl";

const FeaturedOneHome = ({ title, categoryid }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const res = await axios.get(`GetProductByCatgory/${categoryid}/0`);
      setProducts(res.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        type="button"
        onClick={onClick}
        className={` ${className} slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-neutral-600 text-xl hover-bg-neutral-600 hover-text-white transition-1`}
      >
        <i className="ph ph-caret-right" />
      </button>
    );
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;

    return (
      <button
        type="button"
        onClick={onClick}
        className={`${className} slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-neutral-600 text-xl hover-bg-neutral-600 hover-text-white transition-1`}
      >
        <i className="ph ph-caret-left" />
      </button>
    );
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const settings2 = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="featured-products my-30">
      <div className="container container-lg">
        <div className="row g-4 flex-wrap-reverse">
          <div className="col-xxl-8">
            <div className="border border-gray-100 p-24 rounded-16">
              <div className="section-heading mb-24">
                <div className="flex-between flex-wrap gap-8">
                  <h5 className="mb-0">Office Furnitures </h5>
                  <div className="flex-align mr-point gap-16">
                    <Link
                      to="/product/10015/20018"
                      className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline"
                    >
                      View All Deals
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row gy-4 featured-product-slider">
                <Slider {...settings}>
                  {products?.map((product) => (
                    <div
                      key={product.Product_Details_Id}
                      className="border border-gray-100 hover-border-main-600 rounded-16"
                    >
                      <div className="col-xxl-6 ">
                        <div className="">
                          <div className="mt-24 product-card d-flex gap-16 p-16 transition-2">
                            <img
                              src={
                                product.Image
                                  ? `${imageURL}/${product.Image}`
                                  : noimg
                              }
                              style={{ objectFit: "contain" }}
                            />
                            <div className="product-card__content my-20 flex-grow-1">
                              <h6 className="title text-lg fw-semibold mb-12">
                                <Link
                                  to="/product-details-two"
                                  className="link text-line-2"
                                  tabIndex={0}
                                >
                                  {product.Product_Details_Description}
                                </Link>
                              </h6>

                              <div className="product-card__price mt-14">
                                <QuantityControl product={product} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="row gy-4 featured-product-slider my-20">
                <Slider {...settings2}>
                  {products?.map((product) => (
                    <div
                      key={product.Product_Details_Id}
                      className="border border-gray-100 hover-border-main-600 rounded-16"
                    >
                      <div className="col-xxl-6 ">
                        <div className="">
                          <div className="mt-24 product-card d-flex gap-16 p-16    transition-2">
                            <img
                              src={
                                product.Image
                                  ? `${imageURL}/${product.Image}`
                                  : noimg
                              }
                              style={{ objectFit: "contain" }}
                            />
                            <div className="product-card__content my-20 flex-grow-1">
                              <h6 className="title text-lg fw-semibold mb-12">
                                <Link
                                  // to="/product/10015/20018"
                                  className="link text-line-2"
                                  tabIndex={0}
                                >
                                  {product.Product_Details_Description}
                                </Link>
                              </h6>

                              <div className="product-card__price mt-14">
                                <QuantityControl product={product} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
          <div className="col-xxl-4">
            <div className="position-relative rounded-16 bg-light-purple overflow-hidden p-28 pb-0 z-1 text-center h-100">
              <img
                src="assets/images/bg/featured-product-bg.png"
                alt=""
                className="position-absolute inset-block-start-0 inset-inline-start-0 z-n1 w-100 h-100 cover-img"
              />
              <div className="py-xl-4 text-center">
                <span className="h6 mb-20 text-white">
                  Premium Office Furniture Collections
                </span>

                <Link
                  to="/product/10015/20018"
                  className="mt-16 mb-24 btn btn-main-two fw-medium d-inline-flex align-items-center rounded-pill gap-8"
                  tabIndex={0}
                >
                  Discover Now
                  <span className="icon text-xl d-flex">
                    <i className="ph ph-arrow-right" />
                  </span>
                </Link>
              </div>
              <img
                src={chairo}
                alt=""
                className="d-xxl-inline-flex d-none"
                style={{ objectFit: "contain", maxHeight: "449px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOneHome;
