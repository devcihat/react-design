import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  Grow your business with
                  <strong className="brand-name"> Lorem Ipsum</strong>
                </h1>
                <h2 className="my-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </h2>
                <div className="mt-3">
                  <NavLink to="/service" className="btn-get-started mb-3">
                    Get Started
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <lottie-player
                  src="https://assets10.lottiefiles.com/packages/lf20_tkcawuru.json"
                  background="transparent"
                  speed="1"
                  autoplay
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
