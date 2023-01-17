import React from "react";
import "./Footer.css";
import yoko from "../../images/Subtract.png";
import insta from "../../images/insta.png";
import tw from "../../images/tw.png";
import fb from "../../images/Vector.png";

const Footer = () => {
  return (
    <div class="footer-section">
      <div class="container footer-container">
        <div class="row footer-container">
          <div class="col-sm-6 contact">
            <div class="contact-1">
              <div class="logo__div">
                <img src={yoko} />
                <p>Yoko</p>
              </div>
              <p class="subtitle">Subscribe for all updates</p>
              <div class="input__mail">
                <input placeholder="EMAIL" />
                <a href="">Subscribe</a>
              </div>
            </div>
            <div class="social__media">
              <div class="social__title">
                <h6>Socials</h6>
              </div>
              <div class="social__icons">
                <div class="icons">
                  <a href="">
                    <img src={fb} />
                  </a>
                  <a href="">
                    <img src={tw} />
                  </a>
                  <a href="">
                    <img src={insta} />
                  </a>
                </div>
                <div class="copyright">
                  <h6>Copyright © My Company.</h6>
                  <h6>All rights reserved.</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 footer-menu">
            <div>
              <ul>
                <li class="title-menu">Pages</li>
                <li>About</li>
                <li>Services</li>
                <li>Case Studies</li>
              </ul>
              <ul class="sub_menu">
                <li class="title-menu">Powered By</li>
                <li>Webflow</li>
                <li class="title-menu">Support</li>
                <li>Maciej Kociala</li>
              </ul>
            </div>
            <div>
              <ul>
                <li class="title-menu">Pages</li>
                <li>About</li>
                <li>Services</li>
                <li>Case Studies</li>
                <li>Blog</li>
                <li>Testimonials</li>
                <li>Career</li>
              </ul>
            </div>
            <div>
              <ul>
                <li class="title-menu">Pages</li>
                <li>About</li>
                <li>Services</li>
                <li>Case Studies</li>
                <li>Blog</li>
                <li>Testimonials</li>
                <li>Career</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
