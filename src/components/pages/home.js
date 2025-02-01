import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css"; // Import CSS for styles
import sampleImage from "../images/law-element.png"; // Replace with your actual image
import PricingSection from "../PricingSection"; // Adjust path if needed
import FaqSection from "../FaqSection";

const Home = () => {
  const textArray = [
    "Do you take more than 1 hour to do, well just 1 hour worth of audio transcriptions?",
    "Have you lost work just because the deadline for finishing the transcription was too soon?",
    "If that's you and you never want to be in that position again, sign up below and try us out.",
    "You won't regret it.",
  ];

  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [textArray.length]);

  return (
    <div className="home-wrapper">
      {/* Landing Section */}
      <div className="home-container">
        <div className="content">
          {/* Left Section: Text */}
          <div className="text-section">
            <h1>
              Made for <span>LEGAL</span> transcribers.
            </h1>
            <p className="changing-text">{textArray[currentText]}</p>

            <Link to="/get-started" className="get-transcriptions-btn">
              Get 60 minutes of transcriptions for FREE
            </Link>
          </div>

          {/* Right Section: Image */}
          <div className="image-section">
            <img src={sampleImage} alt="Sample" />
          </div>
        </div>
      </div>

      {/* Other Sections (PricingSection moved below) */}
      <div className="sections-container">
        <PricingSection />
        <FaqSection /> {/* FAQ Section Added Below Pricing */}
        {/* Add more sections here later */}
      </div>
    </div>
  );
};

export default Home;
