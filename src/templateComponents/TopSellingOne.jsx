import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import axios, { imageURL } from "../axios";

const TopSellingOne = ({title,categoryid}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const res = await axios.get(`GetProductByCatgory/${categoryid}`);
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
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="top-selling-products pt-80">
      <div className="container container-lg">
        <div className="border border-gray-100 p-24 rounded-16">
          <div className="section-heading mb-24">
            <div className="flex-between flex-wrap gap-8">
              <h5 className="mb-0">{title}</h5>
              <div className="flex-align mr-point gap-16">
                <Link
                  to="/shop"
                  className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline"
                >
                  View All Deals
                </Link>
              </div>
            </div>
          </div>
          <div className="row g-12">
            <div className="col-12">
              <div className="top-selling-product-slider arrow-style-two">
                <Slider className="row" {...settings}>
                  {products?.map((product) => (
                    <div className="col-lg-2 col-md-2 col-sm-6" key={product.Product_Details_Id}>
                      <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                        <Link
                          to="/product-details-two"
                          className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                        >
                          <img
                            src={`${imageURL}/${product.Image}`}
                            alt=""
                            className="image-fluid"
                          />
                        </Link>
                        <div className="product-card__content mt-16">
                          {/* {<div className="flex-align gap-6">
                            <span className="text-xs fw-medium text-gray-500">
                              4.8
                            </span>
                            <span className="text-15 fw-medium text-warning-600 d-flex">
                              <i className="ph-fill ph-star" />
                            </span>
                            <span className="text-xs fw-medium text-gray-500">
                              (17k)
                            </span>
                          </div>} */}
                          <h6 className="title text-lg fw-semibold mt-12 mb-8">
                            <Link
                              to="/product-details-two"
                              className="link text-line-2"
                              tabIndex={0}
                            >
                              {product.Product_Details_Description}
                            </Link>
                          </h6>
                          {/* <div className="flex-align gap-4">
                            <span className="text-tertiary-600 text-md d-flex">
                              <i className="ph-fill ph-storefront" />
                            </span>
                            <span className="text-gray-500 text-xs">
                              By Lucky Supermarket
                            </span>
                          </div> 
                          <div className="mt-8">
                            <div
                              className="progress w-100 bg-color-three rounded-pill h-4"
                              role="progressbar"
                              aria-label="Basic example"
                              aria-valuenow={35}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div
                                className="progress-bar bg-tertiary-600 rounded-pill"
                                style={{ width: "35%" }}
                              />
                            </div>
                            <span className="text-gray-900 text-xs fw-medium mt-8">
                              Sold: 18/35
                            </span>
                          </div>*/}
                          <div className="product-card__price my-20">
                            {/* {<span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                              
                            </span>} */}
                            <span className="text-heading text-md fw-semibold ">
                            {product.Rate}{" "}
                              <span className="text-gray-500 fw-normal">
                                /Qty
                              </span>{" "}
                            </span>
                          </div>
                          <Link
                            to="/cart"
                            className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                            tabIndex={0}
                          >
                            Add To Cart <i className="ph ph-shopping-cart" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellingOne;
