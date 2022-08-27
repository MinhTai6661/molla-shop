import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';
import Button from '../Button';
import { EyeOutlined, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { message, Rate } from 'antd';
import Evaluate from '../Evaluate';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '~/page/Cart/cartSlice';

const cx = classNames.bind(styles);

function ProductItem({ id, title, price, category, image, oldPrice, rate, countRate }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClickItem = () => {
        navigate(`/product/${id}`);
        window.scrollTo(0, 0);
    };
    const handleAddProduct = (product) => {
        dispatch(addToCart({ ...product, quantity: 1 }));
        message.success({
            content: `Add \"${product.title}\" successfuly !`,
            className: 'custom-class',
            style: {
                textTransform: 'capitalize',
            },
        });
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('main')}>
                <div className={cx('thumb')}>
                    <img className={cx('img')} src={image} alt={title} onClick={handleClickItem} />
                    <Button
                        leftIcon={<ShoppingCartOutlined />}
                        className={cx('add')}
                        onClick={() =>
                            handleAddProduct({
                                id,
                                title,
                                price,
                                category,
                                image,
                                oldPrice,
                                rate,
                                countRate,
                            })
                        }
                    >
                        ADD TO CART
                    </Button>
                </div>
                <div className={cx('info')} onClick={handleClickItem}>
                    <span className={cx('category')}>{category}</span>
                    <span className={cx('title')}>{title}</span>
                    <div className={cx('price')}>
                        <span className={cx('price-current')}>${price}</span>
                        {true && <span className={cx('price-old')}>${1000}</span>}
                    </div>
                </div>

                <div className={cx('evaluate')}>
                    {' '}
                    <Evaluate rate={rate} countRate={countRate} isDisabled />
                </div>
            </div>

            {/* <div className={cx('tags')}></div> */}

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
    );
}

ProductItem.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    oldPrice: PropTypes.string,
    rate: PropTypes.number,
    countRate: PropTypes.number,
};

export default ProductItem;
