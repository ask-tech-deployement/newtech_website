import React from "react";
import { Link } from "react-router-dom";
import ppe1 from "../../assets/banner/ppe1.png";
import ppe2 from "../../assets/banner/ppe.png";

const PromotionalBanner1 = () => {
  return (
    <section className="day-sale mt-20">
      <div className="container container-lg">
        <div className="day-sale-box rounded-16 overflow-hidden flex-between position-relative mb-24 z-1">
          <img
            src="assets/images/bg/day-sale-bg.png"
            alt=""
            className="position-absolute inset-block-start-0 inset-inline-start-0 z-n1 w-100 h-100 cover-img"
          />
          <div className="d-xl-block d-none">
            <img src={ppe1} alt="" />
          </div>
          <div className="day-sale-box__content d-block w-100 text-start py-32 ps-lg-0 ps-24">
            <h3 className="text-white fw-medium mb-24">STAY PROTECTED</h3>
            <h6 className="text-white fw-medium mb-8">
              ESSENTIAL PPE EQUIPMENT
            </h6>
            <h6 className="text-white fw-medium mb-0">
              MASKS, GLOVES, FACE SHIELDS &amp; MORE
            </h6>
            <Link
              to="/product/10012/0"
              className="btn btn-outline-white flex-align d-inline-flex rounded-pill gap-8 mt-28"
              tabIndex={0}
            >
              Explore Now <i className="ph ph-plus text-xl d-flex" />
            </Link>
          </div>
          <div className="d-md-block d-none pe-xxl-5 pe-md-4">
            <img src={ppe2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner1;
