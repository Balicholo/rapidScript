import React from "react";
import "./pricingSection.css"; // Ensure to create this CSS file

const PricingSection = () => {
  return (
    <section className="pricing-container">
      {/* Heading */}
      <h2 className="pricing-title">
        Simple <span className="highlight">pricing</span>, for everyone.
      </h2>

      {/* Pricing Box */}
      <div className="pricing-card">
        <h3 className="price">$5</h3>
        <p className="description">Per hour of audio transcribed</p>
        <p className="subtext">Perfect for everyone.</p>
        
        {/* Button */}
        <button className="get-started--btn">Get started</button>

        {/* Features List */}
        <ul className="features-list">
          <li><i class="ri-checkbox-circle-line"></i> Audio file sizes up to 5GB</li>
          <li><i class="ri-checkbox-circle-line"></i>  Audio duration up to 10 hours</li>
        </ul>
      </div>
    </section>
  );
};

export default PricingSection;