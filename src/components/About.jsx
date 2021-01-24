import React from "react";
import "../style.css";

function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h3 className="fw-bold">
            Estimate For <br /> Future Projects
          </h3>
          <p className="text-muted text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
        <div className="col-md-6">
          <lottie-player
            src="https://assets4.lottiefiles.com/packages/lf20_miapuf5f.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
}

export default About;
