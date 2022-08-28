import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './ProductDetailTop.module.scss';
import { Col, Divider, message, Rate, Row } from 'antd';
import { FullscreenOutlined } from '@ant-design/icons';
import Evaluate from '~/components/Evaluate';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Container from '~/components/Container';
import PropTypes from 'prop-types';
import QuantityProduct from '~/components/QuantityProduct';
import { useDispatch } from 'react-redux';
import { addToCart } from '~/page/Cart/cartSlice';

const cx = classNames.bind(styles);

export default function ProductDetailTop({ currentProduct }) {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const handleChangeQuantity = (value) => {
        setQuantity(value);
    };
    const handleAddToCart = () => {
        dispatch(addToCart({ ...currentProduct, quantity: quantity }));
        setQuantity(1);
        // message.success({
        //     content: `Add ${quantity} \"${currentProduct.title}\" successfuly !`,
        //     className: 'custom-class',
        //     style: {
        //         textTransform: 'capitalize',
        //     },
        // });
        // message.config({
        //     top: 100,
        //     duration: 1,
        //     maxCount: 1,
        // });
    };
    return (
        <Container>
            <div className={cx('wrapper')}>
                <Row gutter={[{ md: 48 }]}>
                    <Col xs={24} md={12}>
                        <div className={cx('thumb')}>
                            <img src={currentProduct?.image} alt={currentProduct?.title} />
                            <button className={cx('full-size')}>
                                <FullscreenOutlined />
                            </button>
                        </div>
                    </Col>
                    <Col xs={24} md={12}>
                        <div className={cx('details')}>
                            <h3 className={cx('title')}>{currentProduct?.title}</h3>
                            <div className={cx('rate')}>
                                <Evaluate
                                    rate={currentProduct?.rating?.rate} // will fix it in the future
                                    countRate={currentProduct?.rating.count}
                                    isDisabled
                                />
                            </div>
                            <span className={cx('price')}>${currentProduct?.price}</span>
                            <p className={cx('description')}>{currentProduct?.description}</p>
                            <div className={cx('quantity')}>
                                <QuantityProduct
                                    value={quantity}
                                    min={1}
                                    onChange={(value) => handleChangeQuantity(value)}
                                />
                            </div>
                            <div className={cx('btn-group')}>
                                <Button primary outline onClick={handleAddToCart}>
                                    ADD TO CART
                                </Button>
                                <Button primary fill>
                                    ADD TO WISHLISH
                                </Button>
                            </div>
                            <Divider />

                            <span className={cx('categories')}>
                                Category: {currentProduct?.category}
                            </span>
                            <div className={cx('share')}>
                                share
                                <ul className={cx('list-icon')}>
                                    <li>
                                        <a href="#" className={cx('facebook')}>
                                            <FontAwesomeIcon icon={faFacebookF} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className={cx('instagram')}>
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className={cx('youtube')}>
                                            <FontAwesomeIcon icon={faYoutube} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

ProductDetailTop.propTypes = {
    currentProduct: PropTypes.object.isRequired,
};
