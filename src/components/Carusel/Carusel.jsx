import React from 'react'
import Frame1Section from './Frame1Section'
import Frame2Section from './Frame2Section'
import Frame3Section from './Frame3Section'
import Slider from "react-slick";


export default function CaruselSection() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1.65,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <Frame1Section/>
            <Frame2Section/>
            <Frame3Section/>
        </Slider>
    );
}

