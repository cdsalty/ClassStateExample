import React, { useState } from 'react';

const StateExample = () => {
  const fruits = ['Mango', 'Orange', 'Guava', 'Banana'];
  let index = 0;

  const [fruit, setFruit] = useState(fruits[0]);

  const showNextFruit = () => {
    index++;
    setFruit(fruits[index]);
    console.log(fruit);
  };

  return (
    <div>
      Fruit Name: {fruit}
      <button onClick={showNextFruit}>Next Fruit</button>
    </div>
  );
};

export default StateExample;
