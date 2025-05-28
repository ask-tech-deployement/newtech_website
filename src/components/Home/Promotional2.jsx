import React from "react";
import { Link } from "react-router-dom";
import noimg from "../../assets/banner/pkg.png";
import pkg2 from "../../assets/banner/pkg2.png";
import pkg3 from "../../assets/banner/pkg3.png";

const Promotional2 = () => {
  return (
    <section className="promotional-banner mt-32">
      <div className="container container-lg">
        <div className="row gy-4">
          {/* Packing & Packaging Materials */}
          <div className="col-lg-4 col-sm-6">
            <div className="position-relative rounded-16 overflow-hidden z-1 p-32 d-flex flex-row">
              <img
                src="assets/images/bg/promo-bg-img1.png"
                alt=""
                className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1"
              />
              <div className="text-container pe-xxl-4">
                <h6 className="text-heading mb-8">
                  Packing & Packaging Materials
                </h6>
                <p className="mb-16">
                  Ensure secure shipping with durable, eco-friendly boxes,
                  tapes, and cushioning materials.
                </p>
                <Link
                  to="/product/10013/0"
                  className="d-inline-flex align-items-center gap-8 text-heading text-md fw-medium border border-top-0 border-end-0 border-start-0 border-gray-900 hover-text-main-two-600 hover-border-main-two-600"
                >
                  Explore Now
                  <span className="icon text-md d-flex">
                    <i className="ph ph-plus" />
                  </span>
                </Link>
              </div>
              <div className="image-container">
                <img
                  src={noimg}
                  alt="Packing & Packaging Materials"
                  style={{ minWidth: "150px", maxHeight: "200px" }}
                />
              </div>
            </div>
          </div>

          {/* Barcode Labels & Printing Supplies */}
          <div className="col-lg-4 col-sm-6">
            <div className="position-relative rounded-16 overflow-hidden z-1 p-32 d-flex flex-row">
              <img
                src="assets/images/bg/promo-bg-img2.png"
                alt=""
                className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1"
              />
              <div className="text-container pe-xxl-4">
                <h6 className="text-heading mb-8">
                  Barcode Labels & Printing Supplies
                </h6>
                <p className="mb-16">
                  Streamline inventory management with premium labels and
                  reliable printing solutions.
                </p>
                <Link
                  to="/product/10014/"
                  className="d-inline-flex align-items-center gap-8 text-heading text-md fw-medium border border-top-0 border-end-0 border-start-0 border-gray-900 hover-text-main-two-600 hover-border-main-two-600"
                >
                  Explore Now
                  <span className="icon text-md d-flex">
                    <i className="ph ph-plus" />
                  </span>
                </Link>
              </div>
              <div className="image-container">
                <img
                  src={pkg2}
                  alt="Packing & Packaging Materials"
                  style={{ minWidth: "150px", maxHeight: "200px" }}
                />
              </div>
            </div>
          </div>

          {/* Material Handling Equipment */}
          <div className="col-lg-4 col-sm-6">
            <div className="position-relative rounded-16 overflow-hidden z-1 p-32 d-flex flex-row">
              <img
                src="assets/images/bg/promo-bg-img3.png"
                alt=""
                className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1"
              />
              <div className="text-container pe-xxl-4">
                <h6 className="text-heading mb-8">
                  Material Handling Equipment
                </h6>
                <p className="mb-16">
                  Enhance productivity with forklifts, pallet trucks, and
                  warehouse essentials.
                </p>
                <Link
                  to="/product/10016/0"
                  className="d-inline-flex align-items-center gap-8 text-heading text-md fw-medium border border-top-0 border-end-0 border-start-0 border-gray-900 hover-text-main-two-600 hover-border-main-two-600"
                >
                  Explore Now
                  <span className="icon text-md d-flex">
                    <i className="ph ph-plus" />
                  </span>
                </Link>
              </div>
              <div className="image-container">
                <img
                  src={pkg3}
                  alt="Packing & Packaging Materials"
                  style={{ minWidth: "150px", maxHeight: "200px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotional2;
