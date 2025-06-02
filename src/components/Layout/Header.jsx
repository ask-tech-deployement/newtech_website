import React, { useContext, useEffect, useRef, useState } from "react";
import $ from "jquery";
import query from "jquery";
import "select2";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { IoLogInOutline } from "react-icons/io5";
import logo from "../../assets/header/logo.png";
import axios from "../../axios";
import cartContext from "../Context/cartContext";
import { phone1, phone2, email } from "../../utils";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
    const selectElement = query(".js-example-basic-single");
    selectElement.select2();

    return () => {
      if (selectElement.data("select2")) {
        selectElement.select2("destroy");
      }
    };
  }, []);

  const [categorys, setCategorys] = useState([]);
  const navigate = useNavigate();
  const [searchFilter, setSearchFilter] = useState("");
  const { cartItems, filterClickHandler } = useContext(cartContext);
  const [categoryFilter, setCategoryFilter] = useState(0);
  const categorySelect = useRef({});

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

  useEffect(() => {
    const $selectElement = $(categorySelect.current); // Access the select element with jQuery

    // Initialize select2
    $selectElement.select2();

    // Add a change event listener
    $selectElement.on("change", (e) => {
      setCategoryFilter(e.target.value);
    });

    // Cleanup on unmount
    return () => {
      if ($selectElement.data("select2")) {
        $selectElement.off("change"); // Remove event listener
        $selectElement.select2("destroy"); // Destroy select2 instance
      }
    };
  }, []);

  // Mobile menu support
  const [menuActive, setMenuActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const handleMenuClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  };

  // Search control support
  const [activeSearch, setActiveSearch] = useState(false);
  const handleSearchToggle = () => {
    setActiveSearch(!activeSearch);
  };

  // category control support
  const [activeCategory, setActiveCategory] = useState(false);
  const handleCategoryToggle = () => {
    setActiveCategory(!activeCategory);
  };
  const [activeIndexCat, setActiveIndexCat] = useState(null);
  const handleCatClick = (index) => {
    setActiveIndexCat(activeIndexCat === index ? null : index);
  };

  const handleSelectChange = (e) => {
    console.log(e.target.value);
  };

  const handleClickFilter = () => {
    navigate(`/product/${categoryFilter}/0`);
    filterClickHandler(searchFilter);
  };

  return (
    <>
      <div className="overlay" />
      <ul
        className="d-lg-flex d-none justify-content-center py-8 gap-32 align-items-center"
        style={{ backgroundColor: "rgb(60, 124, 75)" }}
      >
        <li>
          <FaPhoneAlt style={{ color: "white" }} />
          <a href={`tel:${phone1}`} style={{ color: "white" }}>
            {phone1}
          </a>{" "}
          |{" "}
          <a href={`tel:${phone2}`} style={{ color: "white" }}>
            {phone2}
          </a>
        </li>
        <li>
          <a href={`mailto:${email}`} style={{ color: "white" }}>
            <MdEmail /> {email}
          </a>
        </li>
        <li className="d-flex gap-10">
          <a href="#" style={{ color: "white" }}>
            <FaXTwitter />
          </a>
          <a href="#" style={{ color: "white" }}>
            <FaFacebookF />
          </a>
          <a href="#" style={{ color: "white" }}>
            <FaLinkedinIn />
          </a>
          <a href="#" style={{ color: "white" }}>
            <BsInstagram />
          </a>
        </li>
      </ul>
      <div
        className={`side-overlay ${(menuActive || activeCategory) && "show"}`}
        onClick={() => {
          setMenuActive(false);
          setActiveCategory(false);
        }}
      />
      {/* ==================== Search Box Start Here ==================== */}

      <div className={`search-box ${activeSearch && "active"}`}>
        <button
          onClick={handleSearchToggle}
          type="button"
          className="search-box__close position-absolute inset-block-start-0 inset-inline-end-0 m-16 w-48 h-48 border border-gray-100 rounded-circle flex-center text-white hover-text-gray-800 hover-bg-white text-2xl transition-1"
        >
          <i className="ph ph-x" />
        </button>
        <div className="container">
          <div className="position-relative">
            <input
              type="text"
              className="form-control py-16 px-24 text-xl rounded-pill pe-64"
              placeholder="Search for a product or brand"
              value={searchFilter}
              onChange={(e) => {
                setSearchFilter(e.target.value);
              }}
            />
            <button
              onClick={() => {
                handleClickFilter();
                handleSearchToggle();
              }}
              style={{ backgroundColor: "var(--main-900)" }}
              type="button"
              className="w-48 h-48 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8"
            >
              <i className="ph ph-magnifying-glass" />
            </button>
          </div>
        </div>
      </div>
      {/* ==================== Search Box End Here ==================== */}
      {/* ==================== Mobile Menu Start Here ==================== */}
      <div
        className={`mobile-menu scroll-sm d-lg-none d-block ${
          menuActive && "active"
        }`}
      >
        <button
          onClick={() => {
            handleMenuToggle();
          }}
          type="button"
          className="close-button"
        >
          <i className="ph ph-x" />{" "}
        </button>
        <div className="mobile-menu__inner">
          <Link to="/" className="mobile-menu__logo">
            <img src={logo} alt="Logo" />
          </Link>
          <div className="mobile-menu__menu">
            {/* Nav Menu Start */}
            <ul className="nav-menu flex-align nav-menu--mobile">
              <li
                onClick={() => {
                  handleMenuClick(0);
                }}
                className="nav-menu__item "
              >
                <Link
                  to="/"
                  className={`nav-menu__link ${
                    activeIndex === 0 ? "activePage" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li onClick={() => handleMenuClick(1)} className="nav-menu__item">
                <Link
                  to="/about"
                  className={`nav-menu__link ${
                    activeIndex === 1 ? "activePage" : ""
                  }`}
                >
                  About Us
                </Link>
              </li>

              <li
                onClick={() => handleMenuClick(2)}
                className="nav-menu__item "
              >
                <Link
                  to="#"
                  className={`nav-menu__link ${
                    activeIndex === 2 ? "activePage" : ""
                  }`}
                >
                  Brochure
                </Link>
              </li>
              <li onClick={() => handleMenuClick(3)} className="nav-menu__item">
                <Link
                  to="/contact"
                  className={`nav-menu__link ${
                    activeIndex === 3 ? "activePage" : ""
                  }`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            {/* Nav Menu End */}
          </div>
        </div>
      </div>
      <div
        className={`responsive-dropdown cat common-dropdown d-lg-none d-block nav-submenu p-0 submenus-submenu-wrapper shadow-none border border-gray-100 ${
          activeCategory && "active"
        }`}
      >
        <button
          onClick={() => {
            handleCategoryToggle();
            setActiveIndexCat(null);
          }}
          type="button"
          className="close-responsive-dropdown rounded-circle text-xl position-absolute inset-inline-end-0 inset-block-start-0 mt-4 me-8 d-lg-none d-flex"
        >
          <i className="ph ph-x text-white" />{" "}
        </button>
        <div className="logo px-16 d-lg-none d-block text-center">
          <Link to="/" className="link">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <ul className="scroll-sm p-0 py-8 overflow-y-auto ">
          {categorys?.map((mcat) => (
            <li
              key={mcat.MainCategory_Id}
              onClick={() => handleCatClick(mcat.MainCategory_Id)}
              className={`has-submenus-submenu ${
                activeIndexCat === mcat.MainCategory_Id ? "active" : ""
              }`}
            >
              <Link
                onClick={() => setActiveIndexCat(null)}
                to={`/product/${mcat.MainCategory_Id}/0`}
                className="text-white text-15 py-12 px-16 flex-align gap-8 rounded-0"
              >
                <span>{mcat.MainCategory_Description}</span>
                <span className="icon text-md d-flex ms-auto">
                  <i className="ph ph-caret-right" />
                </span>
              </Link>
              <div
                className={`submenus-submenu py-16 ${
                  activeIndexCat === mcat.MainCategory_Id ? "open" : ""
                }`}
              >
                <h6 className="text-lg px-16 submenus-submenu__title">
                  {mcat.MainCategory_Description}
                </h6>
                <ul className="submenus-submenu__list max-h-300 overflow-y-auto scroll-sm">
                  {mcat.subCategories.map((scat) => (
                    <li key={scat.Category_Description}>
                      <Link
                        to={`/product/${mcat.MainCategory_Id}/${scat.Category_Id}`}
                      >
                        {scat.Category_Description}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* ==================== Mobile Menu End Here ==================== */}
      {/* ======================= Middle Header Two Start ========================= */}
      <div className={`full-header bg-white ${scroll && "fixed-header"}`}>
        <header className="header-middle style-two">
          <div className="container container-lg">
            <nav className="header-inner flex-between">
              {/* Logo Start */}
              <div className="logo">
                <Link to="/" className="link">
                  <img src={logo} style={{ maxWidth: "150px" }} alt="Logo" />
                </Link>
              </div>
              {/* Logo End  */}
              {/* form Category Start */}
              <div className="flex-align gap-16">
                <div
                  action="#"
                  className="flex-align flex-wrap form-location-wrapper"
                >
                  <div className="search-category style-two d-flex h-48 search-form">
                    <select
                      ref={categorySelect}
                      className="js-example-basic-single border border-gray-200 border-end-0 rounded-0 border-0"
                      name="state"
                      onChange={handleSelectChange}
                    >
                      <option value={0}>All Categories</option>
                      {categorys.map((cat) => (
                        <option
                          key={cat.MainCategory_Id}
                          value={cat.MainCategory_Id}
                        >
                          {cat.MainCategory_Description}
                        </option>
                      ))}
                    </select>
                    <div className="search-form__wrapper position-relative">
                      <input
                        type="text"
                        className="search-form__input common-input py-13 ps-16 pe-18 rounded-0 border-0"
                        placeholder="Search for a product or brand"
                        value={searchFilter}
                        onChange={(e) => {
                          setSearchFilter(e.target.value);
                        }}
                      />
                    </div>
                    <button
                      onClick={handleClickFilter}
                      type="button"
                      className="bg-success flex-center text-xl text-white flex-shrink-0 w-48 hover-bg-main-two-700 d-lg-flex d-none"
                    >
                      <i className="ph ph-magnifying-glass" />
                    </button>
                  </div>
                </div>
              </div>
              {/* form Category start */}
              {/* Header Middle Right start */}
              <div className="header-right flex-align d-lg-block d-none">
                <div className="header-two-activities flex-align flex-wrap gap-32">
                  <Link
                    to="http://targetdemo.asktek.net/tompg.buroneed.webapp/"
                    className="flex-align flex-column gap-8 item-hover-two"
                    target="_blank"
                  >
                    <span className="text-2xl d-flex position-relative item-hover__text">
                      <IoLogInOutline />
                    </span>
                    <span className="text-md item-hover__text d-none d-lg-flex">
                      Login
                    </span>
                  </Link>
                  <Link
                    to="/cart"
                    className="flex-align flex-column gap-8 item-hover-two"
                  >
                    <span className="text-2xl d-flex position-relative me-6 mt-6 item-hover__text">
                      <i className="ph ph-shopping-cart-simple" />
                      {Object.keys(cartItems).length > 0 && (
                        <span className="w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4">
                          {Object.keys(cartItems).length}
                        </span>
                      )}
                    </span>

                    <span className="text-md item-hover__text d-none d-lg-flex">
                      Cart
                    </span>
                  </Link>
                </div>
              </div>
              {/* Header Middle Right End  */}
            </nav>
          </div>
        </header>
        {/* ======================= Middle Header Two End ========================= */}
        {/* ==================== Header Two Start Here ==================== */}
        <header
          className="header border-bottom border-gray-100 "
          style={{ backgroundColor: "#12324f" }}
        >
          <div className="container container-lg">
            <nav className="header-inner d-flex justify-content-between gap-8">
              <div className="flex-align menu-category-wrapper">
                <div className="d-flex d-lg-none">
                  <button
                    onClick={handleCategoryToggle}
                    type="button"
                    className="category__button flex-align gap-8 fw-medium bg-main-two-600 p-16 text-white"
                  >
                    <span className="icon text-2xl d-xs-flex d-none">
                      <i className="ph ph-dots-nine" />
                    </span>
                    <span className="d-sm-flex d-none">All</span> Categories
                  </button>
                </div>
                <div
                  className={`category main  on-hover-item text-white d-block`}
                  style={{ backgroundColor: "#12324f" }}
                >
                  <button
                    type="button"
                    className="category__button flex-align gap-8 fw-medium p-16 border-end border-start border-gray-100  category-two text-white"
                  >
                    <span className="icon text-2xl d-xs-flex d-none text-white">
                      <i className="ph ph-dots-nine" />
                    </span>
                    <span className="d-sm-flex d-none text-white" >All Categories</span> 
                    <span className="arrow-icon text-xl d-flex text-white">
                      <i className="ph ph-caret-down text-white" />
                    </span>
                  </button>
                  <div className="responsive-dropdown on-hover-dropdown common-dropdown nav-submenu p-0 submenus-submenu-wrapper">
                    <button
                      type="button"
                      className="close-responsive-dropdown rounded-circle text-xl position-absolute inset-inline-end-0 inset-block-start-0 mt-4 me-8 d-lg-none d-flex"
                    >
                      <i className="ph ph-x" />{" "}
                    </button>
                    <div className="logo px-16 d-lg-none d-block">
                      <Link to="/" className="link">
                        <img src={logo} alt="Logo" />
                      </Link>
                    </div>
                    <ul className="scroll-sm p-0 py-8 w-300 max-h-400 overflow-y-auto" style={{ backgroundColor: "#12324f" }}>
                      {categorys.map((mainCat) => (
                        <li
                          key={mainCat.MainCategory_Id}
                          className="has-submenus-submenu"
                        >
                          <Link
                            to={`/product/${mainCat.MainCategory_Id}/0`}
                            className="text-white text-15 py-12 px-16 flex-align gap-8 rounded-0"
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
                {/* Category Dropdown End  */}
                {/* Menu Start  */}
                <div className="header-menu d-lg-block d-none">
                  {/* Nav Menu Start */}
                  <ul className="nav-menu flex-align ">
                    <li
                      onClick={() => handleMenuClick(0)}
                      className="nav-menu__item"
                    >
                      <Link
                        to="/"
                        className={`nav-menu__link ${
                          activeIndex === 0 ? "activePage" : ""
                        }`}
                      >
                        Home
                      </Link>
                    </li>
                    <li
                      onClick={() => handleMenuClick(1)}
                      className="nav-menu__item"
                    >
                      <Link
                        to="/about"
                        className={`nav-menu__link ${
                          activeIndex === 1 ? "activePage" : ""
                        }`}
                      >
                        About Us
                      </Link>
                    </li>
                    <li
                      onClick={() => handleMenuClick(2)}
                      className="nav-menu__item"
                    >
                      <Link
                        to="#"
                        className={`nav-menu__link ${
                          activeIndex === 2 ? "activePage" : ""
                        }`}
                      >
                        Brochure
                      </Link>
                    </li>
                    <li
                      onClick={() => handleMenuClick(3)}
                      className="nav-menu__item"
                    >
                      <NavLink
                        to="/contact"
                        className={`nav-menu__link ${
                          activeIndex === 3 ? "activePage" : ""
                        }`}
                      >
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                  {/* Nav Menu End */}
                </div>
                {/* Menu End  */}
              </div>
              {/* Header Right start */}
              <div className="header-right flex-align">
                <div className="me-8 d-lg-none d-block">
                  <div className="header-two-activities flex-align flex-wrap gap-32">
                    <button
                      onClick={handleSearchToggle}
                      type="button"
                      className="flex-align search-icon d-lg-none d-flex gap-4 item-hover-two"
                    >
                      <span className="text-2xl d-flex position-relative item-hover__text">
                        <i className="ph ph-magnifying-glass text-white" />
                      </span>
                    </button>

                    <Link
                      to="http://targetdemo.asktek.net/tompg.buroneed.webapp/"
                      className="flex-align flex-column gap-8 item-hover-two"
                    >
                      <span className="text-2xl text-white d-flex position-relative item-hover__text">
                        <IoLogInOutline color="white" />
                      </span>
                      <span className="text-md text-white item-hover__text d-none d-lg-flex">
                        Login
                      </span>
                    </Link>

                    <Link
                      to="/cart"
                      className="flex-align flex-column gap-8 item-hover-two"
                    >
                      <span className="text-2xl d-flex position-relative me-6 mt-6 item-hover__text">
                        <i className="ph ph-shopping-cart-simple text-white" />
                        {Object.keys(cartItems).length > 0 && (
                          <span className="w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4">
                            {Object.keys(cartItems).length || ""}
                          </span>
                        )}
                      </span>
                      <span className="text-md text-white item-hover__text d-none d-lg-flex">
                        Cart
                      </span>
                    </Link>
                  </div>
                </div>
                <button
                  onClick={handleMenuToggle}
                  type="button"
                  className="toggle-mobileMenu d-lg-none ms-3n text-4xl d-flex "
                >
                  {" "}
                  <i className="ph ph-list text-white" />{" "}
                </button>
              </div>
              {/* Header Right End  */}
            </nav>
          </div>
        </header>
      </div>
      {/* ==================== Header End Here ==================== */}
    </>
  );
};

export default Header;
