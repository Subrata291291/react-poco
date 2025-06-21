import React from 'react';
import Banner from '../components/Banner';
import bannerImage from '../assets/images/banner-pic1.png';
import PopularProducts from '../components/PopularProducts';
import Service from '../components/Service';
import Introduction from '../components/Introduction';
import FoodMenu from '../components/FoodMenu';
import FoodNames from '../components/FoodNames';
import Review from '../components/Review';
import Form from '../components/Form';


const Home = () => {
  return (
    <div>
      <Banner
        title="Spicy Delicious"
        subtitle="Fresh Chicken"
        items={['Fresh Chicken', 'Italian Food', 'Combo Items']}
        note="This Weekend Only"
        image={bannerImage}
      />
      <PopularProducts />
      <Service/>
      <Introduction/>
      <FoodMenu/>
      <FoodNames/>
      <Review/>
      <Form/>
    </div>
  );
};

export default Home;
