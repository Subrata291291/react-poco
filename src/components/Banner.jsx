import React, { useEffect, useRef } from 'react';
import bannerImage from '../assets/images/banner-pic.png';

const Banner = ({ title, items, note, image = bannerImage }) => {
  const bannerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Rotate banner text
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [items.length]);

  // Mouse movement parallax effect
  useEffect(() => {
    const banner = bannerRef.current;

    const handleMouseMove = (event) => {
      const boxRect = banner.getBoundingClientRect();
      const offsetX = event.clientX - boxRect.left;
      const offsetY = event.clientY - boxRect.top;

      const moveX = (offsetX / boxRect.width - 0.5) * -30;
      const moveY = (offsetY / boxRect.height - 0.5) * -30;

      banner.style.setProperty('--before-transform', `translate(${moveX}px, ${moveY}px)`);
    };

    const handleMouseLeave = () => {
      banner.style.setProperty('--before-transform', 'translate(0, 0)');
    };

    banner.addEventListener('mousemove', handleMouseMove);
    banner.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      banner.removeEventListener('mousemove', handleMouseMove);
      banner.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="banner-area" ref={bannerRef}>
      <div className="banner_slider p-0">
        <div className="slider position-relative">
          <div className="container">
            <div className="slider_content animate__animated animate__fadeInUp">
              <div className="row">
                <div className="col-12">
                  <div className="banner-content text-center">
                    <h2 data-aos="fade-left">{title}</h2>
                    <h1 data-aos="fade-right">
                      <span className="animationtext clip text-main">
                        <span className="cd-words-wrapper">
                          {items.map((text, index) => (
                            <span
                              key={index}
                              className={`item-text ${index === currentIndex ? 'is-visible' : 'is-hidden'}`}
                            >
                              {text}
                            </span>
                          ))}
                        </span>
                      </span>
                    </h1>
                    <h4 data-aos="fade-left">{note}</h4>
                  </div>
                  <div className="banner-pic text-center" data-aos="fade-top">
                    <img src={image} alt="Banner Visual" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
