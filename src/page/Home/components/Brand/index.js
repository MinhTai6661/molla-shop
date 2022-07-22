/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import tempData from '~/tempData';
import styles from './Brand.module.scss';
import './Brand.scss';
const cx = classNames.bind(styles);

function Brand() {
    const [screenWidth, setScreenWidth] = useState(1024);
    console.log('Brand ~ screenWidth', screenWidth);
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.addEventListener('resize', handleResize);
        };
    });

    const slidesToShow = () => {
        if (screenWidth < 768) {
            return 3;
        }
        if (screenWidth >= 768 && screenWidth < 992) {
            return 4;
        }

        return 7;
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
