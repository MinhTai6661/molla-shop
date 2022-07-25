/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { deviceModeSlelector } from '~/redux/selector';
import tempData from '~/tempData';
import styles from './Brand.module.scss';
import './Brand.scss';
const cx = classNames.bind(styles);

function Brand() {
    const { size } = useSelector(deviceModeSlelector);
    console.log('Brand ~ screenSize', size);
    const slidesToShow = () => {
        if (size === 'xl') {
            return 7;
        }
        if (size === 'lg') {
            return 6;
        }
        if (size === 'md') {
            return 5;
        }
        if (size === 'sm') {
            return 4;
        }

        return 3;
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow(),
        slidesToScroll: 1,
        swipeToSlide: true,
        // adaptiveHeight: true,
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
