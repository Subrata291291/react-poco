import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { Fancybox } from '@fancyapps/ui';

// Import images
import img1 from '../assets/images/galleryThumb1_1.jpg';
import img2 from '../assets/images/galleryThumb1_2.jpg';
import img3 from '../assets/images/galleryThumb1_3.jpg';
import img4 from '../assets/images/galleryThumb1_4.jpg';
import img5 from '../assets/images/galleryThumb1_5.jpg';
import img6 from '../assets/images/galleryThumb1_1.jpg';
import img7 from '../assets/images/galleryThumb1_2.jpg';
import img8 from '../assets/images/galleryThumb1_3.jpg';
import img9 from '../assets/images/galleryThumb1_4.jpg';
import img10 from '../assets/images/galleryThumb1_5.jpg';

const Gallery = () => {
  const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {});
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 6 } },
      { breakpoint: 768, settings: { slidesToShow: 5 } },
      { breakpoint: 576, settings: { slidesToShow: 3 } },
    ],
  };

  return (
    <section className="gallery-area p-70" style={{overflow: 'hidden'}}>
        <Slider {...settings}>
          {galleryImages.map((image, index) => (
            <div className="slider_content" key={index}>
              <div className="p-2">
              <a href={image} data-fancybox="gallery">
                <img src={image} alt={`Gallery ${index + 1}`} className="img-fluid" />
              </a>
              </div>
            </div>
          ))}
        </Slider>
    </section>
  );
};

export default Gallery;
