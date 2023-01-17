import React from "react";
import clientimg from "../../images/testimonials-img.jpg";
import "./TestimonialsCard.css";

const TestimonialsCard = () => {
  return (
    <div className="testimonial__card">
      <div className="desc">
        <p>
          Working with Micky is a pleasure. We are impressed by the way how
          their teamwork. It’s professional, at a good pace with great
          communication about our business needs. They were prepared extremely
          well to work with our company.
        </p>
      </div>
      <div className="client">
        <div className="client_img">
          <img src={clientimg} />
        </div>
        <div className="client_info">
          <p>Janet Moore</p>
          <p>Oho, Woldie</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
