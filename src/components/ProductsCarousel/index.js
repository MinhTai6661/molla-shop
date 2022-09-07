import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Slider from 'react-slick';
import settings from './settings';
import classNames from 'classnames/bind';
import styles from './ProductsCarousel.module.scss';
import ProductItem from '../ProductItem';
import { Grid } from 'antd';

const cx = classNames.bind(styles);
const { useBreakpoint } = Grid;
function ProductsCarousel({ listProducts }) {
    const screens = useBreakpoint();
    const slider = useRef();
    const [showArrow, setShowArrow] = useState(false);
    useEffect(() => {
        if (listProducts.length > settings().slidesToShow && !screens.xs) {
            setShowArrow(true);
        } else {
            setShowArrow(false);
        }
    }, [listProducts.length, screens]);
    return (
        <div className={cx('wrapper')}>
            {showArrow && (
                <button
                    className={cx('btn-prev')}
                    onClick={() => {
                        slider.current.slickPrev();
                    }}
                >
                    <LeftOutlined />
                </button>
            )}
            <Slider
                {...settings(listProducts.length)}
                ref={(c) => {
                    slider.current = c;
                }}
            >
                {listProducts?.length &&
                    listProducts &&
                    listProducts.map((item) => (
                        <div key={item.id}>
                            <ProductItem
                                id={item.id}
                                category={item.category}
                                image={item.image}
                                price={item.price}
                                title={item.title}
                                rate={item.rating.rate}
                                countRate={item.rating.count}
                            />
                        </div>
                    ))}
            </Slider>
            {showArrow && (
                <button
                    className={cx('btn-next')}
                    onClick={() => {
                        slider.current.slickNext();
                    }}
                >
                    <RightOutlined />
                </button>
            )}
        </div>
    );
}

ProductsCarousel.propTypes = {
    listProduct: PropTypes.array,
};

export default ProductsCarousel;
