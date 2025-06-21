import React from 'react';

const FoodNames = () => {
  const foodItems = [
    'Chicken Pizza',
    'Grilled Chicken',
    'Burger',
    'Chicken Pizza',
    'Fresh Pasta',
    'Italiano French Fry',
    'Chicken Fry',
  ];

  // Repeat the list multiple times for scrolling effect
  const repeatedItems = [...Array(3)].flatMap(() => foodItems);

  return (
    <div className="food-names">
      <ul className="marqee-list d-flex">
        <li className="marquee-item">
          {repeatedItems.map((item, index) => (
            <span key={index} className={`text-slider ${index % 2 === 1 ? 'text-style' : ''}`}>
              {item}
            </span>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default FoodNames;
