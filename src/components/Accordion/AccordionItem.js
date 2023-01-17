import React, { useState } from "react";
import "./AccordionItem.css";

const AccordionItem = ({ title, desc }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion__item">
      <div className="title" onClick={() => setIsActive(!isActive)}>
        <h3>{title}</h3>
        <h3>{isActive ? "-" : "+"}</h3>
      </div>
      <div className="accordion_content">
        <p>{isActive ? desc : ""}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
