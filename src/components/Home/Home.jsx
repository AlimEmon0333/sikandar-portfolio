import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Typewritter from "typewriter-effect";
import "./Home.css";
import image1 from "../../images/ecommerce store.jpg";
import image2 from "../../images/Digital marketing agency.jpg";
import image3 from "../../images/Health And Wellness bussiess.jpg";
import image4 from "../../images/food truck .jpg";
import image5 from "../../images/online education platform.jpg";
import image6 from "../../images/podcasting.jpg";
import { FaCheck } from "react-icons/fa";
import { FaHandshakeAngle } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import CarouselComponent from "../carousel2/app";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { SlEnvolope } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Navbar from "../navbar/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import video1 from "../../images/airplane shipping.mp4";
import video2 from "../../images/see shipping.mp4";
import video3 from "../../images/road shipping.mp4";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <div>
      <div className="bg-overlay">
        <div className="hero-carousel">
          <Slider {...settings}>
            <div className="slide">
              <div className="overlay"></div>
              <video
                src={video1}
                autoPlay
                muted
                loop
                width="100%"
                height="100%"
              />
              <div className="text-overlay">
                <h3>Connecting Your Products to the World with</h3>
                <h1>
                  <span>TRADE</span>
                  CO.LTD
                </h1>
                <p>
                  Renowned for our expertise in management consulting, we
                  provide swift air shipping, delivering your products through
                  the skies.
                </p>
              </div>
            </div>
            <div className="slide">
              <div className="overlay"></div>
              <video
                src={video2}
                autoPlay
                muted
                loop
                width="100%"
                height="100%"
              />
              <div className="text-overlay">
                <h3>Connecting Your Products to the World with</h3>
                <h1>
                  <span>TRADE</span>
                  CO.LTD
                </h1>
                <p>
                  As a global leader in management consulting, we offer
                  efficient sea shipping, navigating your products across
                  oceans.
                </p>
              </div>
            </div>
            <div className="slide">
              <div className="overlay"></div>
              <video
                src={video3}
                autoPlay
                muted
                loop
                width="100%"
                height="100%"
              />
              <div className="text-overlay">
                <h3>Connecting Your Products to the World with</h3>
                <h1>
                  <span>TRADE</span>
                  CO.LTD
                </h1>
                <p>
                  Recognized among the top management consulting firms, we
                  ensure reliable road shipping, transporting your products
                  overland.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <hr className="container" />

      <div className="section-2 my-5">
        <div className="container">
          <h1 className="main-heading text-center my-5">
            Boost Your Business Growth with My International Business Egency{" "}
            <br />
            <span>
              <span>TRADE</span>CO.LTD
            </span>
          </h1>
          <p className="sec-2-para-1 my-5">
            In today's world, selling Chinese products in the international
            market has become crucial. It has become an integral part of
            business, helping reach people, increase brand awareness, and boost
            sales. However, with so many markets and methods available, it can
            be challenging for business owners to manage everything. This is
            where our company helps.
          </p>
          <p className="sec-2-para-2 my-5">
            We specialize in selling Chinese products worldwide, and we have the
            expertise to help businesses achieve their growth objectives.
            Whether you are a small business looking to establish your
            international presence or a large corporation aiming to increase
            your ROI, we have solutions tailored to your needs. Our customized
            export plans are designed to grow your business. We work closely
            with our clients, understanding their goals and objectives, and then
            develop and execute a tailored export strategy aligned with their
            vision.
          </p>
          <p className="sec-2-para-3 my-5">
            We believe that international shipping is not just about selling
            products but also about building relationships with your target
            audience. We focus on providing engaging and valuable services that
            resonate with your customers and drive brand loyalty. Our
            data-driven approach ensures that our strategies continuously evolve
            and adapt to meet the needs of your business and your customers.
          </p>
          <hr />
        </div>
      </div>
      <div className="section-3 my-5 container p-5">
        <h1 className="sec-3-main-heading text-center  my-5">
          <span>Contact me</span> today to learn how my International
          marketing expertise can help boost your business growth.
        </h1>
        <p className="sec-3-para text-center my-5">
          My expertise are ready to help you take your business to the next
          level.
        </p>
        <div className="d-flex justify-content-center">
          <button className="sec-3-button px-5 py-2">Contact Now</button>
        </div>
      </div>

      <div className="section-4 my-5 p-3 container" id="about">
        <div className="row">
          <div className="col-md-7 col-sm-12">
            <h1 className="sec-4-heading">About Us</h1>
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
            <img
              src={require("../../images/hero2.png")}
              width={"100%"}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="section-5 container my-5" id="ideas">
        <h1 className="sec-5-main-heading text-center my-3">Business Ideas</h1>
        <h3 className="sec-5-text text-center my-3">
          Here are some business ideas and motivational speaking topics related
          to entrepreneurship and business growth:
        </h3>
        <div className="row d-flex justify-content-center ">
          <div className="col-md-4 col-12">
            <div className="card-1">
              <div className="card-1-img">
                <img src={image1} />
              </div>
              <div className="card-1-content">
                <h5 className="mb-3 w-100">
                  E-commerce store for niche products
                </h5>
                <p>E-Commerce outlet offering exclusive items.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="card-2">
              <div className="card-2-img">
                <img src={image2} />
              </div>
              <div className="card-2-content">
                <h5>Digital Marketing Agency</h5>
                <p>Organization offering digital marketing expertise.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="card-3">
              <div className="card-3-img">
                <img src={image3} />
              </div>
              <div className="card-3-content">
                <h5>Health And Wellness Business</h5>
                <p>
                  The industry aims to enhance overall well-being and encourage
                  healthy habits.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="card-4">
              <div className="card-4-img">
                <img src={image4} />
              </div>
              <div className="card-4-content">
                <h5>Food truck or catering service</h5>
                <p>
                  Check out a roaming food establishment or personalized
                  catering solution.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="card-5">
              <div className="card-5-img">
                <img src={image5} />
              </div>
              <div className="card-5-content">
                <h5>Online education platform</h5>
                <p>
                  E-learning platforms offer interactive online courses and
                  resources for self-paced learning.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="card-6">
              <div className="card-6-img">
                <img src={image6} />
              </div>
              <div className="card-6-content">
                <h5> Podcasting or video production</h5>
                <p>Creating audio content or producing videos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="section-6 container" id="guarantee">
        <div className="row">
          <h1 className="sec-6-main-heading mt-5">What I Guarantee</h1>
          <div className="sec-6-icon1 col-md-4 col-lg-4 col-12">
            <FaCheck className="my-4 fw-bold fs-1 sec-6-icon" />
            <h5>Accurate Execution</h5>
            <p className="sec-6-pera1">
              My client-centric approach ensures that your goals are our top
              priority.
            </p>
          </div>

          <div className="sec-6-icon2 col-md-4 col-lg-4 col-12">
            <FaHandshakeAngle className="my-4 fw-bold fs-1 sec-6-icon" />
            <h5>Commitment</h5>

            <p className="sec-6-pera2">
              My outmost commitment lies in delivering transformational change
              for each and every client.
            </p>
          </div>
          <div className="sec-6-icon3 col-md-4 col-lg-4 col-12">
            <FaMoneyBillWave className="my-4 fw-bold fs-1 sec-6-icon" />
            <h5>Value</h5>

            <p className="sec-6-pera3">
              My dedication to providing cost-effective investment solutions
              without compromising on quality is what sets me apart in the
              industry.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="section-7 my-5">
        <h1 className="sec-7-main-heading text-center mt-5 mb-2">
          Customized Stratigies for your business
        </h1>
        <p className="sec-7-text text-center">
          I listen to your needs and craft solutions that deliver results
        </p>
        <div className="d-flex justify-content-center">
          <button className="sec-7-btn text-center my-3">Contact Now</button>
        </div>
      </div>
      <hr />
      <div className="section-8 container my-5" id="popularity">
        <h3 className="sec-8-main-heading my-3 text-center">Popularity</h3>
        <p className="sec-8-text text-center">
          Here Are my some seminars over all world.
        </p>
        <div className="sec-8-carousel text-center">
          <CarouselComponent />
        </div>
      </div>
      <div className="section-9 my-5 container p-5">
        <h1 className="sec-9-main-heading text-center my-5">
          <RiDoubleQuotesL />
        </h1>
        <p className="sec-9-para text-center my-5">
          "Chase your dreams with passion and purpose, and success will follow"
        </p>
        <div className="d-flex justify-content-center">
          <h4 className="sec-9-h4 px-5 py-2"> Sikandar Panjwani </h4>
        </div>
      </div>
    </div>
  );
};

export default Hero;
