import React from "react";
import TestimonialsCard from "./TestimonialsCard";
import "./ListTestimonials.css";

const ListTestimonials = () => {
  return (
    <div className="container list__testimonials">
      <div className="row list__testimonials__inner">
        <h1>
          What <span>clients say</span> about Yoko
        </h1>
        <div className="col-6">
          <TestimonialsCard />
        </div>
        <div className="col-6">
          <TestimonialsCard />
        </div>
      </div>
    </div>
  );
};

export default ListTestimonials;
