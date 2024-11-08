// src/components/PlanetsSlider/index.js

import React from 'react';
import Slider from 'react-slick';
import PlanetItem from '../PlanetItem';
import './index.css';

const PlanetsSlider = ({ planetsList }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <button className="slider-next">Next</button>,
    prevArrow: <button className="slider-prev">Previous</button>,
  };

  return (
    <div className="planets-slider" data-testid="planets">
      <h1 className="planets-heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(planet => (
          <PlanetItem key={planet.id} planet={planet} />
        ))}
      </Slider>
    </div>
  );
};

export default PlanetsSlider;
