/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { deviceModeSelector } from '~/redux/selector';
import tempData from '~/tempData';
import styles from './Brand.module.scss';
import './Brand.scss';
const cx = classNames.bind(styles);

function Brand() {
    const { size } = useSelector(deviceModeSelector);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };
    return (
        <div className={cx('brand__wrapper')}>
            <Slider {...settings} className={cx('slider')}>
                {tempData.brands.length &&
                    tempData.brands.map((brand, index) => (
                        <div className={cx('item')} key={brand}>
                            <img className={cx('img')} src={brand} alt={brand} />
                        </div>
                    ))}
            </Slider>
        </div>
    );
}

export default Brand;
