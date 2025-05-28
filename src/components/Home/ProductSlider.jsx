import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import noimg from "../../assets/cart/noimg.png";
import axios, { imageURL } from "../../axios";
import QuantityControl from "../Cart/QuantityControl";

const ProductSlider = ({ title, categoryid }) => {
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
    autoplay: true,
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
    <section className="top-selling-products pt-20">
      <div className="container container-lg">
        <div className="border border-gray-100 p-24 rounded-16">
          <div className="section-heading mb-24">
            <div className="flex-between flex-wrap gap-8">
              <h5 className="mb-0">{title}</h5>
              {/* <div className="flex-align mr-point gap-16">
                <Link
                  to={`product/${categoryid}/0`}
                  className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline"
                >
                  View All Deals
                </Link>
              </div> */}
            </div>
          </div>
          <div className="row g-12">
            <div className="col-12">
              <div className="top-selling-product-slider arrow-style-two">
                <Slider {...settings}>
                  {products?.map((product) => (
                    <div key={product.Product_Details_Id}>
                      <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                        <div className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative">
                          <img
                            src={
                              product.Image
                                ? `${imageURL}/${product.Image}`
                                : noimg
                            }
                            alt=""
                            className="image-fluid"
                          />
                        </div>
                        <div className="product-card__content mt-10 w-100">
                          <h6 className="title text-md fw-semibold  mb-8 text-line-2">
                            {product.Product_Details_Description}
                          </h6>
                          <div className="product-card__price mt-14">
                            <QuantityControl product={product} />
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

export default ProductSlider;
