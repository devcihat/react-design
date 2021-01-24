import React from "react";
import { Link } from "react-router-dom";
import Sdata from "./Sdata";
import Card from "./Card";

function CardDetail(props) {
  const { imgsrc, title } = this.props.card;
  console.log(props);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 order-1 order-lg-2 header-img">
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_1tiI8w.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          />
        </div>
        <div className=" col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
          <div className="card">
            <img
              src={props.imgsrc}
              className="card-img-top"
              alt={props.imgsrc}
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">{props.title}</h5>
              <p className="card-text fw-lighter">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/service">
                <a className="btn-get-started text-white btn-primary">
                  Back Card List
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
