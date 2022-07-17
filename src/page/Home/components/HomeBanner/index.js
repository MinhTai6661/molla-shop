import React from 'react';
import PropTypes from 'prop-types';
import BannerItem from '../BannerItem';
import Slider from 'react-slick';

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
    const dataBanners = [
        {
            background: 'https://d-themes.com/react/molla/demo-5/images/home/sliders/slide-1.jpg',
            title: 'Mystery Deals',
            bottomSuggest: 'Online only',
            topSuggest: "Don't miss",
            btnContent: 'DISCOVER NOW',
        },
        {
            background: 'https://d-themes.com/react/molla/demo-5/images/home/sliders/slide-2.jpg',
            title: 'Treat your self',
            bottomSuggest: 'Limited time only',
            topSuggest: 'Up to 50% off',
            btnContent: 'DISCOVER NOW',
        },
    ];
    return (
        <div>
            <Slider {...settings}>
                {dataBanners.map((banner) => (
                    <div>
                        <BannerItem {...banner} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

HomeBanner.propTypes = {};

export default HomeBanner;
