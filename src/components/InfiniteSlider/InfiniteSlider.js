import React from "react";
import "./InfiniteSlider.css";
import img1 from "../../images/5f64c09456e14f0f96d87504_functionity 1.png";
import img2 from "../../images/60475badf21682676f04fc7b_logo 2.png";
import img3 from "../../images/60561c9791ba0c22b6e5408e_Frame 177 1.png";

const InfiniteSlider = () => {
  return (
    <div>
      <div class="slider__comapanies">
        <div class="slide">
          <img src={img1} />
          <img src={img2} />
          <img src={img3} />
          <img src={img1} />
          <img src={img2} />
          <img src={img3} />
          <img src={img1} />
          <img src={img2} />
          <img src={img3} />
        </div>
        <div class="slide">
          <img src={img1} />
          <img src={img2} />
          <img src={img3} />
          <img src={img1} />
          <img src={img2} />
          <img src={img3} />
          <img src={img1} />
          <img src={img2} />
          <img src={img3} />
        </div>
      </div>
    </div>
  );
};

export default InfiniteSlider;
