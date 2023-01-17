import React from "react";
import ListServicesCards from "../components/Cards/ListServicesCards/ListServicesCards";
import MultipleItems from "../components/slider/Slider";
import ListTestimonials from "../components/Testimonials/ListTestimonials";
import heroimage from "../images/pexels-photo-7859351 1.png";
import "./HomePages.css";
import senectusimg from "../images/senectus-img.png";
import Accordion from "../components/Accordion/Accordion";
import ExploreBtn from "../components/Buttons/ExploreBtn";
import InfiniteSlider from "../components/InfiniteSlider/InfiniteSlider";
import ListBlogCards from "../components/BlogCards/ListBlogCards";

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="hero__section">
        <div className="container home__page__cnt">
          <div className="row inner__home__page_cnt">
            <div className="col-6 col-sm-6 hero__section__left">
              <h1>
                Your next creative all-in-one <span>partner</span>
              </h1>
              <p>
                Urna pretium turpis quis venenatis, aliquet. Faucibus mi sapien
                quam vitae. Id quis felis scelerisque purus, eget neque.
              </p>
              <ExploreBtn />
            </div>
            <div className="col-6 col-sm-6 hero__section__right">
              <img src={heroimage} />
            </div>
          </div>
        </div>
      </div>
      <div className="our__services">
        <div className="container latest__projects__cnt">
          <div className="row title__services">
            <h2>
              Our <span>Services</span>
            </h2>
            <p className="title__p">
              Urna pretium turpis quis venenatis, aliquet. Faucibus mi sapien
              quam
            </p>
          </div>
          <div className="row">
            <ListServicesCards />
          </div>
        </div>
      </div>
      <div className="latest__projects">
        <div className="container ">
          <div className="row">
            <h2>
              Latest <span>Projects</span>
            </h2>
            <p>
              Urna pretium turpis quis venenatis, aliquet. Faucibus mi sapien
              quam vitae. Id quis felis scelerisque purus, eget neque.
            </p>
          </div>
          <div className="slider">
            <MultipleItems />
          </div>
        </div>
        <div className="clients__say">
          <ListTestimonials />
        </div>
        <div className="senectus">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={senectusimg} />
              </div>
              <div className="col-6 senectus_right_content">
                <div>
                  <h2>
                    Senectus <span>nascetur</span> quis lectus in
                  </h2>
                  <p className="senectus__subtitle">
                    Working with Micky is a pleasure. We are impressed by the
                    way how their teamwork. It’s professional, at a good pace
                  </p>
                </div>
                <div className="button__accordion">
                  <Accordion />
                  <a href="" className="explore__btn">
                    Explore
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="infinite__slider">
          <div className="container">
            <div className="row">
              <h2>
                We create better world with those <span>companies</span>
              </h2>
            </div>
            <div className="row">
              <InfiniteSlider />
            </div>
          </div>
        </div>
        <div className="blog">
          <div className="container">
            <div className="row ">
              <div className="col blog__title">
                <h4>Blog</h4>
                <a href="">More Articles</a>
              </div>
            </div>
            <div className="row list__blog_cards">
              <ListBlogCards />
            </div>
          </div>
        </div>
      </div>
      <div className="together">
        <div className="container-fluid">
          <div className="row inner__together">
            <div class="inner__together_1">
              <h1>Let’s work together</h1>
              <a href="">Explore Template</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
