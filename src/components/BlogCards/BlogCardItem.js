import React from "react";
import "./BlogCardItem.css";

const BlogCardItem = ({ img, desc, date }) => {
  return (
    <div className="blog__card__item">
      <div className="blog__card__img">
        <img src={img} />
      </div>
      <div className="info">
        <div className="blog__card__desc">
          <p>{desc}</p>
        </div>
        <div className="blog__card__date">
          <p>{date}</p>
        </div>
        <div className="blog__card__read_more">
          <a href="">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default BlogCardItem;
