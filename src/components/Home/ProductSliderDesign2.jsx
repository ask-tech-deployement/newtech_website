import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import noimg from "../../assets/cart/noimg.png";
import axios, { imageURL } from "../../axios";
import QuantityControl from "../Cart/QuantityControl";

const ProductSliderDesign2 = ({ title, categoryid }) => {
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
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 899,
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
            </div>
          </div>
          <div className="row g-12">
            <div className="col-12">
              <div className="top-selling-product-slider arrow-style-two">
                <Slider {...settings}>
                  {products?.map((product) => (
                    <div key={product.Product_Details_Id}>
                      <div className="">
                        <div className="mt-24 product-card d-flex gap-16 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                          <Link
                            className="product-card__thumb flex-center h-unset rounded-8 bg-gray-50 position-relative w-unset flex-shrink-0 p-24"
                            tabIndex={0}
                          >
                            <img
                              src={
                                product.Image
                                  ? `${imageURL}/${product.Image}`
                                  : noimg
                              }
                              alt=""
                              className="image-fluid"
                            />
                          </Link>
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

export default ProductSliderDesign2;
