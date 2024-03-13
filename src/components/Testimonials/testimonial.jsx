import React from "react";
import "./testimonial.css";
import Img1 from "../../assets/person.jpg";
import Img2 from "../../assets/PngItem_4042710.png";
import Img3 from "../../assets/kindpng_415494.png";
import { Rating } from "@mui/material";

const Testimonial = () => {
  return (
    <>
      <div className="testimonial" id="testimonials">
        <div className="test-top">
          <div className="test-left">
            <div className="box test-box">
              <div className="bar"></div>
              <span>TESTIMONIALS</span>
            </div>
            <h2>
              What Says Our Students{' '}
              <span>About Us</span>
            </h2>
          </div>
          <div className="test-right">
            <div className="right-content">
              <h3>
                1200{" "}
                <span>+</span>
              </h3>
              <p>Happy Users</p>
            </div>
            <div className="border"></div>
            <div className="right-content">
              <h3>
                100 {' '}
                <span>%</span>
              </h3>
              <p>Satisfaction Rate</p>
            </div>
          </div>
        </div>
        <div className="slider-container">
          <TestCard
            profile={Img1}
            name={'Jason Broody'}
            para={'Visual form of a document or a typeface. Visual form of a document or a typeface'}
            rating={4.5}
          />
          <TestCard
            profile={Img2}
            name={'John Doe'}
            para={'Visual form of a document or a typeface. Visual form of a document or a typeface'}
            rating={4}
          />
          <TestCard
            profile={Img3}
            name={'Fox'}
            para={'Visual form of a document or a typeface. Visual form of a document or a typeface'}
            rating={4}
          />
        </div>
        <div className="slider-handle">
          <div className=" slider-btn-dash"></div>
          <div className="slider-btn"></div>
          <div className=" slider-btn-dash"></div>
        </div>
      </div>
    </>
  );
};
export default Testimonial;

function TestCard(props) {
  return (
    <>
      <div className="slider-card">
        <div className="test-card-top">
          <div className="test-imgs">
            <div className="test-card-img">
              <img src={props.profile} alt="" />
            </div>
            <div className="test-comma"></div>
          </div>
          <div className="top-content">
            <h4>{props.name}</h4>
            <p>Student</p>
          </div>
        </div>
        {props.para}
        <div className="test-last">
          <div className="star-container">
          <Rating name="half-rating-read" defaultValue={props.rating} precision={0.5} readOnly />
          </div>
          <div className="comma-img"></div>
        </div>
      </div>
    </>
  );
}
