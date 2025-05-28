import React from "react";
import logo from "../../assets/header/footer-logo.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer py-40 mt-40 bg-color-one">
      <div className="container container-lg">
        <div className="footer-item-two-wrapper d-flex align-items-start flex-wrap justify-content-center">
          <div className="footer-item max-w-275">
            <div className="footer-item__logo">
              <Link to="/">
                {" "}
                <img src={logo} alt="" style={{ mixBlendMode: "multiply" }} />
              </Link>
            </div>
            <p className="mb-24">
              Transform Your Space with the Best Housekeeping Essentials!
            </p>
          </div>

          <div className="footer-item" style={{maxWidth: "500px"}}>
            <div className="flex-align gap-16 mb-16">
              <FaPhoneAlt />
              <a
                href="tel:9741155473"
                className="text-md text-gray-900 hover-text-main-600"
              >
                +91 97411 55473
              </a>
            </div>
            <div className="flex-align gap-16 mb-16" >
              <MdEmail />
              <a
                href="mailto:kishore@buroneed.com"
                className="text-md text-gray-900 hover-text-main-600"
              >
                kishore@buroneed.com
              </a>
            </div>
            <div className="flex-align gap-16 mb-16">
              <FaLocationDot />
              <span className="text-md text-gray-900">
                No.11/14, Subbiah Reddy Block, Ulsoor, Bangalore - 560008 (Near
                Lakshmi Market)
              </span>
            </div>
          </div>

          <div className="footer-item">
            <h6 className="footer-item__title">About</h6>
            <ul className="footer-menu">
              <li className="mb-16">
                <Link to="/" className="text-gray-600 hover-text-main-600">
                  Home
                </Link>
              </li>
              <li className="mb-16">
                <Link to="/about" className="text-gray-600 hover-text-main-600">
                  About Us
                </Link>
              </li>
              <li className="mb-16">
                <Link to="/#" className="text-gray-600 hover-text-main-600">
                  Brochure
                </Link>
              </li>

              <li className="mb-16">
                <Link
                  to="/contact"
                  className="text-gray-600 hover-text-main-600"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h6 className="footer-item__title">Find us on</h6>
            <ul className="footer-menu d-flex justify-content-center py-8 gap-14 align-items-center">
              <li className="d-flex gap-10">
                <a href="#">
                  <FaXTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="#">
                  <BsInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
