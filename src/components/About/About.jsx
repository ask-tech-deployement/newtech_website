import React from "react";
import "./About.css";
import BgInage from "../../assets/about/about3.jpeg";
import Collabs from "../Home/Collabs";
import Brands from "../Home/Brands";

const About = () => {
  return (
    <>
      <section className="about-us-section">
        {/* Hero Section */}
        <div className="hero-container">
          <div className="hero-content">
            <h4 className="section-subtitle">
              About <span>NewTech Office Solution</span>
            </h4>
            <h3 className="hero-title">
              Your trusted partner for corporate supplies since 2005
            </h3>
          </div>
          <div className="hero-image">
            <img
              src={BgInage}
              alt="Office team working together"
              className="img-fluid"
            />
          </div>
        </div>

        {/* Company Description */}
        <div className="company-description">
          <p>
            NewTech Office Solution is a leading wholesale supplier of corporate
            stationery and housekeeping products, serving businesses since 2005.
            Founded by Mr. Navin Vaviya, a seasoned professional with over 20
            years of experience in the office supply industry, our company has
            built a reputation for quality, reliability, and customer-focused
            service.
          </p>
          <p>
            We understand the operational needs of modern businesses and offer a
            wide range of products tailored to meet them. Whether you're a
            startup, SME, or large enterprise, we provide efficient and
            cost-effective procurement solutions designed to streamline your
            office supply process.
          </p>
        </div>

        {/* Unique Selling Points */}
        <div className="usp-section">
          <h2 className="section-title">What Makes Us Unique</h2>
          <div className="usp-grid">
            <div className="usp-card">
              <div className="usp-icon">📊</div>
              <h3>Experience & Expertise</h3>
              <p>Led by a founder with two decades of industry knowledge</p>
            </div>
            <div className="usp-card">
              <div className="usp-icon">🛍️</div>
              <h3>Comprehensive Range</h3>
              <p>A one-stop solution for office stationery and hygiene needs</p>
            </div>
            <div className="usp-card">
              <div className="usp-icon">🚚</div>
              <h3>Timely Delivery</h3>
              <p>
                Efficient logistics for prompt and accurate order fulfillment
              </p>
            </div>
            <div className="usp-card">
              <div className="usp-icon">🎨</div>
              <h3>Custom Solutions</h3>
              <p>Tailored procurement plans and branded products on request</p>
            </div>
            <div className="usp-card">
              <div className="usp-icon">✅</div>
              <h3>Quality Commitment</h3>
              <p>Only trusted brands and verified products</p>
            </div>
            <div className="usp-card">
              <div className="usp-icon">🌱</div>
              <h3>Sustainable Approach</h3>
              <p>Eco-friendly and responsibly sourced supplies</p>
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="founder-section">
          <div className="founder-content">
            <h2 className="section-title">Our Founder</h2>
            <div className="founder-details">
              <h3>Mr. Navin Vaviya</h3>
              <div className="founder-quote">
                "Building trust through quality and reliability has been our
                guiding principle since day one."
              </div>
              <div className="founder-achievements">
                <div className="achievement-item">
                  <span className="achievement-icon">🏆</span>
                  <span>20+ years industry experience</span>
                </div>
                <div className="achievement-item">
                  <span className="achievement-icon">🚀</span>
                  <span>Founded New Tech in 2005</span>
                </div>
                <div className="achievement-item">
                  <span className="achievement-icon">🤝</span>
                  <span>200+ satisfied clients</span>
                </div>
              </div>
              <p>
                With over 20 years of experience in the office supply industry,
                Mr. Navin Vaviya established New Tech E Office Solution with a
                vision to provide reliable, high-quality corporate supplies at
                competitive prices. His hands-on approach and deep understanding
                of client needs have been instrumental in shaping our company's
                customer-first philosophy.
              </p>
              <p>
                Under his leadership, we've grown from a local supplier to a
                trusted partner for businesses across the region, maintaining
                our commitment to quality and service excellence throughout our
                expansion.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stat-card">
            <h2>200+</h2>
            <p>Satisfied Clients</p>
          </div>
          <div className="stat-card">
            <h2>20+</h2>
            <p>Years of Experience</p>
          </div>
          <div className="stat-card">
            <h2>1000+</h2>
            <p>Products Available</p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mission-vision">
          <div className="mv-card">
            <h2>Our Vision</h2>
            <p>
              To be the most trusted corporate supply partner by delivering
              exceptional value through quality products and outstanding
              service.
            </p>
          </div>
          <div className="mv-card">
            <h2>Our Mission</h2>
            <p>
              To simplify office procurement by providing comprehensive,
              cost-effective solutions that help businesses operate more
              efficiently and sustainably.
            </p>
          </div>
        </div>

        {/* Product Range */}
        <div className="products-section">
          <h2 className="section-title">Our Product Range</h2>
          <div className="products-grid">
            <div className="product-card">
              <h3>Office Stationery</h3>
              <ul>
                <li>Writing instruments</li>
                <li>Papers & notebooks</li>
                <li>Filing & organization</li>
                <li>Desk accessories</li>
                <li>Printer supplies</li>
              </ul>
            </div>
            <div className="product-card">
              <h3>Housekeeping Supplies</h3>
              <ul>
                <li>Cleaning chemicals</li>
                <li>Janitorial equipment</li>
                <li>Waste management</li>
                <li>Safety products</li>
                <li>Restroom supplies</li>
              </ul>
            </div>
            <div className="product-card">
              <h3>Pantry Essentials</h3>
              <ul>
                <li>Beverages</li>
                <li>Snacks</li>
                <li>Disposables</li>
                <li>Water solutions</li>
                <li>Breakroom supplies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Collabs />
      <Brands />
    </>
  );
};

export default About;
