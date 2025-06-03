import React from "react";
import { Link } from "react-router-dom";
import noimg from "../../assets/banner/1.png";
import pkg2 from "../../assets/banner/3.png";
import pkg3 from "../../assets/banner/2.png";

const Promotional2 = () => {
  return (
    <section className="promotional-banner mt-32">
      <div className="container container-lg">
        <div className="row gy-4">
          {/* Packing & Packaging Materials */}
          <div className="col-lg-4 col-sm-6">
            <div className="position-relative rounded-16 overflow-hidden z-1 p-32 d-flex flex-row">
              <img
                src="assets/images/bg/1.png"
                alt=""
                className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1"
              />
              <div className="text-container pe-xxl-4">
                <h6 className=" mb-8" style={{ color: "white" }}>
                  Printed ID Cards, Tags & Clips
                </h6>
                <p className="mb-16" style={{color:'white'}}>
                  Boost workplace identity with custom-printed ID cards, premium
                  tags, durable clips, and branded lanyards — ideal for events
                  and teams.
                </p>
                <Link
                  to="/product/10013/0"
                  className="d-inline-flex align-items-center gap-8 text-bg-warning p-1 rounded-8 border-start text-md fw-medium border border-top-0 border-end-0 border-start-0 border-gray-900 hover-text-light-700 hover-border-main-two-600"
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
                src="assets/images/bg/2.png"
                alt=""
                className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1"
              />
              <div className="text-container pe-xxl-4">
                <h6 className="text-heading mb-8">Notebooks – All Varieties</h6>
                <p className="mb-16">
                  Upgrade your writing essentials with high-quality notebooks —
                  ruled, spiral, subject types perfect for schools, offices,
                  bulk orders, and branding.
                </p>
                <Link
                  to="/product/10014/"
                  className="d-inline-flex align-items-center gap-8 text-bg-warning p-1  rounded-8 border-start text-md fw-medium border border-top-0 border-end-0 border-start-0 border-gray-900 hover-text-light-700 hover-border-main-two-600"
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
                src="assets/images/bg/3.png"
                alt=""
                className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1"
              />
              <div className="text-container pe-xxl-4">
                <h6 className=" mb-8" style={{color:'white'}}>
                  Bathroom Cleaning & Maintenance
                </h6>
                <p className="mb-16" style={{color:'white'}}>
                  Maintain spotless spaces with powerful toilet cleaners,
                  brushes, dispensers, and fresheners — everything needed for
                  professional hygiene and restroom care.
                </p>
                <Link
                  to="/product/10016/0"
                  className="d-inline-flex align-items-center gap-8 text-bg-warning p-1  text-md  rounded-8 border-startfw-medium border border-top-0 border-end-0 border-start-0 border-gray-900 hover-text-light-700 hover-border-main-two-600"
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
