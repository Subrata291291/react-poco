import React from 'react';
// Import images
import review1 from '../assets/images/1.jpg';
import review2 from '../assets/images/2.jpg';
import review3 from '../assets/images/3.jpg';
import review4 from '../assets/images/4.jpg';
import review5 from '../assets/images/5.jpg';
import review6 from '../assets/images/6.jpg';

import main from '../assets/images/h6_img3.png';
import shape1 from '../assets/images/h5_decor-4.png';
import shape2 from '../assets/images/h5_decor-2.png';


const Review = () => {
  const heading = "Our work providing healthy foods";
  const quote =
    "“Food for us comes from our relatives. Whether they have wings or fins or roots. That is how we consider food. Food has a culture. It has a history. It has relationships.”";

  const peopleImages = [review1,review2,review3,review4,review5,review6];

  const rightImages = {
    main,shape1,shape2
  };

  return (
    <section className="happy-customer-area p-70">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-12 col-md-6 col-lg-5">
            <div className="happy-customer-left">
              <h3>{heading}</h3>
              <p>{quote}</p>
              <div className="people-box d-flex align-items-center">
                {peopleImages.map((src, index) => (
                  <img key={index} src={src} alt={`Person ${index + 1}`} className="item" />
                ))}
                <div className="plus-icon item">
                  <i className="fa-solid fa-plus"></i>
                </div>
                <p>
                  <span className="blink_me">70+</span> people ordered Yesterday and Even in last 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-12 col-md-6 col-lg-7">
            <div className="happy-customer-right position-relative">
              <img src={rightImages.main} alt="Main visual" />
              <img src={rightImages.shape1} alt="Shape 1" className="happy-customer-shape1" />
              <img src={rightImages.shape2} alt="Shape 2" className="happy-customer-shape2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
