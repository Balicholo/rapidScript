import React from "react";
import "./faq.css"; // Import the corresponding styles

const FaqSection = () => {
  return (
    <div className="faq-container">
      <h2>Frequently asked questions</h2>
      <p className="contact-email">
        If you can't find what you're looking for, email our support team at{" "}
        <a title="support@rapidscript.cloud" href="mailto:support@rapidscript.cloud">support@rapidscript.cloud</a>
      </p>

      <div className="faq-grid">
        <div className="faq-item">
          <h3>Is my information and are my audios secure with RapidScript?</h3>
          <p>
            Yes, we treat your security as a top priority. Our servers are
            securely encrypted and we maintain strict privacy measures to
            protect your information.
          </p>
        </div>
        <div className="faq-item">
          <h3>How accurate is RapidScript?</h3>
          <p>
            Depends on the quality of audio but on average our transcriptions
            boast of a 97%+ accuracy rating.
          </p>
        </div>
        <div className="faq-item">
          <h3>How does RapidScript work?</h3>
          <p>
            RapidScript utilizes AI technology to transcribe spoken words from
            legal recordings into written text. It helps speed up the
            transcription process while reducing the chance of errors.
          </p>
        </div>
        <div className="faq-item">
          <h3>Can RapidScript transcribe in multiple languages?</h3>
          <p>
            Currently, RapidScript specializes in English-language
            transcriptions. However, we do offer multilingual capabilities but
            the accuracy ranges anywhere from 90-95% depending on the language.
          </p>
        </div>
        <div className="faq-item">
          <h3>What format should my audio files be in?</h3>
          <p>
            RapidScript works with a variety of audio file formats including but
            not limited to WAV, MP3, and WAV. More information can be found on
            our website or by contacting our support at{" "}
            <a href="mailto:support@rapidscript.cloud">
              support@rapidscript.cloud
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;