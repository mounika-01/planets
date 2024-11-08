// Write your code here
// src/components/PlanetItem/index.js

import React from 'react';
import './index.css';

const PlanetItem = ({ planet }) => {
  const { name, imageUrl, description } = planet;

  return (
    <div className="planet-item">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  );
};

export default PlanetItem;
