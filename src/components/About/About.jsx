import React from "react";
import "./About.css"; // Optional: You can add custom styling in this CSS file
import Collabs from "../Home/Collabs";
import Brands from "../Home/Brands";

const About = () => {
  return (
    <>
      <section className="about-us-section py-48">
        <div className="container">
          {/* Header */}
          <div className="text-center mt-18 mb-56">
            <h1 className="display-4 font-weight-bold">
              ABOUT <span style={{ color: "blue" }}></span>BURONEED
            </h1>
            <p className="lead text-muted">
              Complete Office Supplies Solutions
            </p>
            <p className="h5 text-muted mb-20">
              Create a Creative Workspace With Us
            </p>
          </div>

          {/* About Us Description */}
          <div className="row mb-5">
            <div className="col-lg-6">
              <p className="lead text-dark">
                Buroneeds is a leading workplace solutions provider based in
                Bangalore, India. Our comprehensive services include office
                supplies, cleaning, and hygiene products, cafeteria and eatable
                items, printer and office machine consumables, crockery and
                hotel ware products, electronic goods, and more. We are your
                one-stop shop for all your office needs, serving business
                houses, SMEs, IT/ITES, and manufacturing industries across
                Bangalore.
              </p>
              <p className="lead text-dark">
                We believe in providing our clients with excellent service,
                never compromising on quality while offering competitive and
                economically viable prices.
              </p>
              <p className="lead text-dark">
                At Buroneeds, we leverage our years of industry experience to
                provide seamless purchase solutions for offices across
                Bangalore.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="https://buroneed.com/wp-content/uploads/2020/02/about-banner-01-2.jpg"
                alt="About Us"
                className="img-fluid rounded-52"
              />
            </div>
          </div>

          {/* What Makes Us Unique */}
          <div className="row my-56">
            <div className="col-12 text-center">
              <h2 className="text-dark font-weight-bold my-36 text-primary-400">
                What Makes Us Unique
              </h2>
              <p className="h6 text-muted">
                At Buroneed, we primarily focus on contributing to making our
                planet healthier while thriving in the industry. We incorporate
                eco-friendly & recycled products into our offerings. Our
                end-to-end transparency and sustainable goals set us apart from
                other companies in the industry.
              </p>
            </div>
          </div>

          {/* Statistics and Collaborations */}
          <div className="row text-center my-56">
            <div className="col-md-4">
              <div className="stat-card p-4 rounded shadow-sm">
                <h3 className="text-dark">250+</h3>
                <p className="text-muted">Satisfied Clients</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-card p-4 rounded shadow-sm">
                <h3 className="text-dark">8+</h3>
                <p className="text-muted">Years of Experience</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-card p-4 rounded shadow-sm">
                <h3 className="text-dark">Pan India</h3>
                <p className="text-muted">Locations Served</p>
              </div>
            </div>
          </div>

          {/* Meet The Team */}
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="text-dark font-weight-bold mb-3 text-warning-700">
                Meet The Team
              </h2>
              <div className="team-member my-36 ">
                <h4 className="text-dark font-weight-bold">
                  Founder: Kishor Patel
                </h4>
                <p className="text-muted">
                  Kishor Patel, founder of Buroneed Supplies, with his 15+ years
                  of experience in the corporate stationery industry, has made
                  superior connections and brought Buroneed to where it is
                  today.
                </p>
              </div>
              <div className="team-member my-36">
                <h4 className="text-dark font-weight-bold">
                  Co-Founder: Vikas Patel
                </h4>
                <p className="text-muted">
                  Vikas Patel, co-founder of Buroneed Supplies, with his 10+
                  years of experience, has really accelerated Buroneed and made
                  it deserving of its clients.
                </p>
              </div>
            </div>
          </div>
          <Collabs />
        </div>
      </section>
      <Brands />
    </>
  );
};

export default About;
