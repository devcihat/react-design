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
      <div style={{ background: "black" }} className="text-center mt-5">
        <div class="row pt-5">
          <div class="col-lg-4">
            <svg
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 140x140"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777" />
              <text x="50%" y="50%" fill="#777" dy=".3em">
                140x140
              </text>
            </svg>

            <h2 className="text-white">Heading</h2>
            <p className="text-white">
              Donec sed odio dui. Etiam porta sem malesuada magna mollis
              euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Praesent commodo cursus magna.
            </p>
            <p className="text-white">
              <button class="btn-get-started  " role="button">
                View details »
              </button>
            </p>
          </div>
          <div class="col-lg-4">
            <svg
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 140x140"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777" />
              <text x="50%" y="50%" fill="#777" dy=".3em">
                140x140
              </text>
            </svg>

            <h2 className="text-white">Heading</h2>
            <p className="text-white">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
              amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor
              mauris condimentum nibh.
            </p>
            <p className="text-white">
              <button class="btn-get-started " role="button">
                View details »
              </button>
            </p>
          </div>
          <div class="col-lg-4">
            <svg
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 140x140"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777" />
              <text x="50%" y="50%" fill="#777" dy=".3em">
                140x140
              </text>
            </svg>

            <h2 className="text-white">Heading</h2>
            <p className="text-white">
              Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Vestibulum id ligula porta felis euismod
              semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum nibh, ut fermentum massa
            </p>
            <p className="text-white">
              <button class="btn-get-started " role="button">
                View details »
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
