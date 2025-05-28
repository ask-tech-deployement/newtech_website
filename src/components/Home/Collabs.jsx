import React from "react";
import noimg from "../../assets/clients/collabs.png";

const Collabs = () => {
  return (
    <section className="Collabs-banner mt-32">
      <div className="container container-lg">
        <div className="row gy-4">
          <div className="col-xs-12">
            <div className="position-relative rounded-16 overflow-hidden z-1 p-32">
              <img
                src={noimg}
                alt=""
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collabs;
