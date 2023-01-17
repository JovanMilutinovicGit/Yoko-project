import React, { useState } from "react";

import { accordionData } from "./Data.js";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  return (
    <div class="senectus__accordian">
      {accordionData.map(({ title, desc }) => (
        <AccordionItem title={title} desc={desc} />
      ))}
    </div>
  );
};

export default Accordion;
