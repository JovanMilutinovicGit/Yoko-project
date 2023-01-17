import React from "react";
import BlogCardItem from "./BlogCardItem";
import { blogCardsData } from "./BlogCardsData.js";
import "./ListBlogCards.css";

const ListBlogCards = () => {
  const listCards = blogCardsData.map((e) => {
    return (
      <div className="col-3">
        <BlogCardItem img={e.image} desc={e.description} date={e.date} />
      </div>
    );
  });

  return <div className="row list">{listCards}</div>;
};

export default ListBlogCards;
