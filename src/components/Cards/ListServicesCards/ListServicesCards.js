import React from "react";
import OurServicesCard from "../OurServicesCards/OurServicesCard";
import "./ListServicesCards.css";

const ListServicesCards = () => {
  return (
    <div className="list__services__cards">
      <div className="container list__services__cards__cnt">
        <div className="row srvc__crd">
          <div className="col-3 col-sm-3 card__in__col">
            <OurServicesCard title="Design" />
          </div>
          <div className="col-3 col-sm-3 card__in__col">
            <OurServicesCard title="Brand" />
          </div>
          <div className="col-3 col-sm-3 card__in__col">
            <OurServicesCard title="Strategy" />
          </div>
          <div className="col-3 col-sm-3 card__in__col">
            <OurServicesCard title="UX/UI" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListServicesCards;
