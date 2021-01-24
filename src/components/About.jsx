import React from "react";
import "../style.css";

function About() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h3 className="fw-bold text-center">
                  Estimate For <br /> Future Projects
                </h3>
                <p className="text-muted text-center mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <div className="mt-3" />
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <lottie-player
                  src="https://assets4.lottiefiles.com/packages/lf20_miapuf5f.json"
                  background="transparent"
                  speed="1"
                  autoplay
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: "black" }} className="col-12 mt-5">
        <h3 className="text-white text-center">Merhaba</h3>
        <h3 className="text-white text-center">Merhaba</h3>{" "}
        <h3 className="text-white text-center">Merhaba</h3>{" "}
        <h3 className="text-white text-center">Merhaba</h3>{" "}
        <h3 className="text-white text-center">Merhaba</h3>{" "}
        <h3 className="text-white text-center">Merhaba</h3>{" "}
        <h3 className="text-white text-center">Merhaba</h3>{" "}
        <h3 className="text-white text-center">Merhaba</h3>{" "}
        <h3 className="text-white text-center">Merhaba</h3>
      </div>
    </>
  );
}

export default About;
