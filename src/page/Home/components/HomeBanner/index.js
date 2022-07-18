import React from 'react';
import PropTypes from 'prop-types';
import BannerItem from '../BannerItem';
import Slider from 'react-slick';
import tempData from '~/tempData';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function HomeBanner(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
    };

    return (
        <div>
            <Slider {...settings}>
                {tempData.banners.map((banner) => (
                    <div key={banner.title}>
                        <BannerItem {...banner} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

HomeBanner.propTypes = {};

export default HomeBanner;
