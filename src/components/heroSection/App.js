import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Typewritter from "typewriter-effect";
import "./style.css";

const Hero = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-12 hero-left-container">
          <div className="mt-5">
            <h2 className="hero-main-heading">Hi,</h2>
            <h4 className="hero-sub-heading">I Am Sikandar Panjwani</h4>
            <div className="">
              <p className="para-1">
                China is a significant player in global trade and exports a vast
                array of products worldwide.Some of the main products that China
                exports include:
              </p>
              <p className="para-2">
                <Typewritter
                  options={{
                    strings: [
                      " Electronics",
                      " Machinery",
                      " Textile and apparel",
                      " footwear",
                      " Furniture",
                      " Home Appliances",
                      " Solar Pannels",
                      " Auto motive vehicles",
                      " Aerospace and defense products",
                      " Medical equipment",
                      " Steels and metals",
                      " chemical and plastics",
                      " food and beverages",
                      " toys and Games",
                      " Sports equipments",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 hero-right-container">
          <img
            src={require("../../images/hero.png")}
            alt=""
            width={"100%"}
            className="md-mt-5"
          />
        </div>
      </div>
      <hr />
      <div className="section-2 my-5">
        <div className="container">
          <h1 className="main-heading text-center my-5">
            Boost Your Business Growth with My International Business Egency
          </h1>
          <p className="sec-2-para-1 my-5">
            In today’s world, digital marketing is essential for businesses of
            all sizes. It has become an integral part of their overall marketing
            strategy to reach and engage their target audience, increase brand
            awareness, and drive conversions. But with so many channels and
            tactics available, it can be overwhelming for business owners to
            navigate the digital marketing landscape alone. That’s where we come
            in.
          </p>
          <p className="sec-2-para-2 my-5">
            I specialize in digital marketing and have the expertise to help
            businesses achieve their growth objectives. Whether you are a small
            business looking to establish your online presence or a large
            corporation wanting to increase your ROI, we have the solutions to
            fit your needs. Our customized digital marketing plans are designed
            to drive results and grow your business. We work closely with our
            clients to understand their goals and objectives, then develop and
            execute a tailored digital marketing strategy that aligns with their
            vision.
          </p>
          <p className="sec-2-para-3 my-5">
            I believe that digital marketing is more than just creating
            campaigns; it’s about building relationships with your target
            audience. We focus on creating engaging and valuable content that
            resonates with your customers and drives brand loyalty. Our
            data-driven approach ensures that our strategies are always evolving
            and adapting to meet the needs of your business and your customers.
          </p>
          <hr />
        </div>
      </div>
      <div className="section-3 my-5 container-fluid p-5">
        <h1 className="sec-3-main-heading text-center  my-5">
          Contact me today to learn how my International marketing expertise can
          help boost your business growth.
        </h1>
        <p className="sec-3-para text-center my-5">
          My team of experts is ready to help you take your business to the next
          level.
        </p>
        <div className="d-flex justify-content-center">
          <button className="sec-3-button px-5 py-2">
            Book An Appointment
          </button>
        </div>
      </div>
      <div className="section-4 my-5 p-3 container">
        <div className="row">
          <div className="col-md-7 col-sm-12">
            <h1 className="sec-4-heading">About Me</h1>
            <p className="sec-4-desc">
              Hello! Welcome to the platform! It's great to have you here.
              Pakistan has a vibrant business community, and I'm sure you have
              valuable insights to share. Please feel free to share your
              business ideas, information, and experiences with us. We're all
              ears! Some topics you might consider sharing about include:
              <ul className="sec-4-list">
                <li>Entrepreneurship opportunities in Pakistan</li>
                <li>Successful business models or case studies</li>
                <li> Industry trends and market analysis</li>
                <li>Innovative solutions or products</li>
                <li>Business challenges and how to overcome them</li>
                <li> Start-up stories and lessons learned</li>
                <li>Marketing and sales strategies</li>
                <li> E-commerce and digital business ideas</li>
                <li>
                  Small and medium-sized enterprise (SME) support and resources
                </li>
                <li>Business networking and partnership opportunities</li>
              </ul>
            </p>
          </div>
          <div className="col-md-5 col-sm-12 d-flex align-items-center">
          <img src={require("../../images/hero2.png")} width={"100%"} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
