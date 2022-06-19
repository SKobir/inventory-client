import React from 'react';
import Products from '../Products/Products';
import Subscribe from '../Subcribe/Subscribe';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Products></Products>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;