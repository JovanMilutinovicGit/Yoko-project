import React from "react";
import lamp from "../../../images/lamp 1.png";
import "./OurServicesCard.css";

const OurServicesCard = ({ title }) => {
  return (
    <div className="our__services__card">
      <div className="card__title">
        <div className="card__icon">
          <img src={lamp} />
        </div>
        <h4>{title}</h4>
      </div>
      <div className="card__desc">
        <p>
          Urna pretium turpis quis venenatis, aliquet. Faucibus mi sapien quam
          vitae. Id quis felis scelerisque purus, eget neque.
        </p>
      </div>
      <div className="card__read__more">
        <a href="">Read More</a>
      </div>
    </div>
  );
};

export default OurServicesCard;
