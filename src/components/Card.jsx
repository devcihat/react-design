import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          <div className="card-body text-center">
            <h5 className="card-title fw-bold">{props.title}</h5>
            <p className="card-text fw-lighter">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/cardDetail/:key">
              <button className="btn-get-started text-white btn-primary">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
