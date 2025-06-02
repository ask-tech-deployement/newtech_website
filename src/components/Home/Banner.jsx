import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Image1 from "../../assets/banner/banner-img1.png";
import Image3 from "../../assets/banner/banner-img3.png";
import Image4 from "../../assets/banner/snacks.png";
import axios from "../../axios";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    getAllCategory();
  }, []);

  const getAllCategory = async () => {
    const [mainCat, subCat] = await Promise.all([
      axios.get("/Master/MainCategory/GetAllactiveMainCategory"),
      axios.get("/Master/SubCategory/GetAllActiveSubCategory"),
    ]);
    const allcategories = mainCat.data.map((mcat) => {
      const subCategories = subCat.data.filter(
        (scat) => scat.MainCategory_Id === mcat.MainCategory_Id
      );
      return { ...mcat, subCategories };
    });
    setCategorys(allcategories);
  };

  return (
    <div className="banner-two">
      <div className="container container-lg">
        <div className="banner-two-wrapper d-flex align-items-start">
          <div
            className="w-265 d-lg-block d-none flex-shrink-0   "
            style={{ backgroundColor: "#12324f" }}
          >
            <div
              className="responsive-dropdown style-two common-dropdown nav-submenu p-0 submenus-submenu-wrapper shadow-none border border-gray-100 position-relative border-top-0"
              style={{ backgroundColor: "#12324f" }}
            >
              <button
                type="button"
                className="close-responsive-dropdown rounded-circle text-xl position-absolute inset-inline-end-0 inset-block-start-0 mt-4 me-8 d-lg-none d-flex"
              >
                <i className="ph ph-x" />{" "}
              </button>
              <div className="logo px-16 d-lg-none d-block">
                <Link to="/" className="link">
                  <img src="assets/images/logo/logo.png" alt="Logo" />
                </Link>
              </div>
              <ul
                className="responsive-dropdown__list scroll-sm p- py-8 overflow-y-auto "
                style={{
                  minHeight: "521px",
                  maxHeight: "521px",
                  overflowY: "scroll",
                }}
              >
                {categorys.map((mainCat) => (
                  <li
                    key={mainCat.MainCategory_Id}
                    className="has-submenus-submenu"
                  >
                    <Link
                      // to={`/product/${mainCat.MainCategory_Id}/0`}
                      className=" text-white text-15 py-12 px-16 flex-align gap-8 rounded-0"
                    >
                      <span>{mainCat.MainCategory_Description}</span>
                      <span className="icon text-md d-flex ms-auto">
                        <i className="ph ph-caret-right" />
                      </span>
                    </Link>
                    <div className="submenus-submenu py-16">
                      <h6 className="text-lg px-16 submenus-submenu__title">
                        {mainCat.MainCategory_Description}
                      </h6>
                      <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                        {mainCat.subCategories?.map((subcat) => (
                          <li key={subcat.Category_Id}>
                            <Link
                              to={`/product/${mainCat.MainCategory_Id}/${subcat.Category_Id}`}
                              className="text-dark"
                            >
                              {subcat.Category_Description}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            style={{ maxHeight: "500px" }}
            className="mt-20 rounded-24 overflow-hidden position-relative arrow-center flex-grow-1 mx-10 0 "
          >
            <img
              src="assets/images/bg/newtech.jpeg"
              alt=""
              className="banner-img position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 z-n1 object-fit-cover rounded-24"
            />
            <div className="banner-item-two__slider">
              <Slider {...settings}>
                {/* Stationery */}
                <div className="banner-item-two">
                  <div className="banner-item-two__content">
                    <h2 className="banner-item-two__title bounce text-white">
                       Smart Stationery for Workspaces
                    </h2>
                    <p className="text-white mb-8">
                      500+ stationery items from top brands. Custom corporate
                      kits available with your logo.
                    </p>
                    <Link
                      to="/product/10012/0"
                      className="btn btn-outline-white d-inline-flex align-items-center rounded-pill gap-8 mt-48"
                    >
                      Explore
                      <span className="icon text-xl d-flex">
                        <i className="ph ph-shield-check" />
                      </span>
                    </Link>
                  </div>
                  <div className="banner-item-two__thumb position-absolute bottom-0">
                    <img src={Image4} alt="PPE Consumables" />
                  </div>
                </div>
                {/* {/*   Premium Toner & Ink Solutions 1/} */}
                <div className="banner-item-two">
                  <div className="banner-item-two__content">
                    <h2 className="banner-item-two__title bounce text-white">
                      Premium Toner & Ink Solutions
                    </h2>
                    <p className="text-white mb-8">
                      Keep your office running smoothly with genuine HP, Canon,
                      and Samsung cartridges. High-quality prints, every time!
                    </p>
                    <Link
                      to="/product/10009/0"
                      className="btn btn-outline-white d-inline-flex align-items-center rounded-pill gap-8 mt-48"
                    >
                      Shop Now
                      <span className="icon text-xl d-flex">
                        <i className="ph ph-shopping-cart-simple" />
                      </span>
                    </Link>
                  </div>
                  <div className="banner-item-two__thumb position-absolute bottom-0">
                    <img src={Image1} alt="Premium Cleaning Solutions" />
                  </div>
                </div>

                {/* New Slide 1: Professional Cleaning Supplies */}
                <div className="banner-item-two">
                  <div className="banner-item-two__content">
                    <h2 className="banner-item-two__title bounce text-white">
                      Professional Cleaning Supplies
                    </h2>
                    <p className="text-white mb-8">
                      Elevate hygiene with Diversey chemicals, microfiber mops,
                      and automated dispensers for a spotless workplace.
                    </p>
                    <Link
                      to="/product/10011/0"
                      className="btn btn-outline-white d-inline-flex align-items-center rounded-pill gap-8 mt-48"
                    >
                      Explore More
                      <span className="icon text-xl d-flex">
                        <i className="ph ph-gift" />
                      </span>
                    </Link>
                  </div>
                  <div className="banner-item-two__thumb position-absolute bottom-0">
                    <img src={Image3} alt="Corporate Gifting & Promotions" />
                  </div>
                </div>

                {/* New Slide 2: Eat  */}
                {/* <div className="banner-item-two">
                  <div className="banner-item-two__content">
                    <h2 className="banner-item-two__title bounce text-white">
                      Office Productivity Starts Here
                    </h2>
                    <p className="text-white mb-8">
                      From Reynolds pens to 3M sticky notes, we’ve got
                      everything to power your office’s creativity and
                      organization.
                    </p>
                    <Link
                      to="/product/10012/0"
                      className="btn btn-outline-white d-inline-flex align-items-center rounded-pill gap-8 mt-48"
                    >
                      Explore
                      <span className="icon text-xl d-flex">
                        <i className="ph ph-shield-check" />
                      </span>
                    </Link>
                  </div>
                  <div className="banner-item-two__thumb position-absolute bottom-0">
                    <img src={Image4} alt="PPE Consumables" />
                  </div>
                </div> */}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
