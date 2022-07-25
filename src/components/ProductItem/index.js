import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';
import Button from '../Button';
import { EyeOutlined, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Rate } from 'antd';

const cx = classNames.bind(styles);

function ProductItem({ title, price, category, image, oldPrice, rate }) {
    return (
        <Link to={config.router.product} className={cx('wrapper')}>
            <div className={cx('thumb')}>
                <img className={cx('img')} src={image} alt={title} />
                <Button leftIcon={<ShoppingCartOutlined />} className={cx('add')}>
                    ADD TO CART
                </Button>
                <div className={cx('btn-group')}>
                    <Link to={config.router.checkout} className={cx('wishlist')}>
                        <label>add to wishlist</label>
                        <span>
                            <HeartOutlined />
                        </span>
                    </Link>
                    <Link to={config.router.checkout} className={cx('quick-view')}>
                        <EyeOutlined />
                    </Link>
                </div>
            </div>
            <div className={cx('info')}>
                <span className={cx('category')}>{category}</span>
                <span className={cx('title')}>{title}</span>
                <div className={cx('price')}>
                    <span className={cx('price-current')}>${price}</span>
                    {true && <span className={cx('price-old')}>${1000}</span>}
                </div>
            </div>
            <div className={cx('tags')}></div>
            <div className={cx('evaluate')}>
                <div className={cx('rate')}>
                    <Rate className={cx('rate-icon')} allowHalf disabled defaultValue={rate} />
                </div>
                <div className={cx('review')}>({2} Review)</div>
            </div>
        </Link>
    );
}

ProductItem.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    oldPrice: PropTypes.string,
    rate: PropTypes.number,
};

export default ProductItem;
