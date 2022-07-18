/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import tempData from '~/tempData';
import styles from './Brand.module.scss';
import './Brand.scss';
const cx = classNames.bind(styles);

function Brand() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
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
