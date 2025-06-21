import React from 'react';

import onlineOrder from '../assets/images/online-order.gif';
import foodDelivery from '../assets/images/food-delivery.gif';
import foodPickup from '../assets/images/food-pickup.gif';
import catering from '../assets/images/catering.gif';
import medal from '../assets/images/medal-.gif';
import bibimbap from '../assets/images/bibimbap.png';

const servicesData = [
    {
      image: onlineOrder,
      title: 'Easy to order',
      description: 'You only need a few steps in ordering food.',
    },
    {
      image: foodDelivery,
      title: 'Fast Delivery',
      description: 'You only need a few steps in ordering food.',
    },
    {
      image: foodPickup,
      title: 'Pickup',
      description: 'Pickup delivery at your doorstep',
    },
    {
      image: catering,
      title: 'Catering Service',
      description: 'You only need a few steps in ordering food.',
    },
    {
      image: medal,
      title: 'Best Quality',
      description: 'Not only fast for us quality is also number one.',
    },
  ];
  

const Service = () => {
  return (
    <div>
      <section className="services-area p-70">
        <div className="container">
          <div
            className="title-box text-center"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <h3>
              <span>
                <img src={bibimbap} alt="icon" />
              </span>{' '}
              Our Services{' '}
              <span>
                <img src={bibimbap} alt="icon" />
              </span>
            </h3>
            <h5>Fastest Delivery partner</h5>
          </div>

          <ul className="d-md-flex justify-content-md-center justify-content-lg-between align-items-center text-center flex-wrap">
            {servicesData.map((service, index) => (
              <li key={index}>
                <div className="service-box">
                  <img src={service.image} alt={service.title} />
                  <h4>{service.title}</h4>
                  <p className="mt-3">{service.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Service;
