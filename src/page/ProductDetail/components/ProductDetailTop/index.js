import React from 'react';

import classNames from 'classnames/bind';
import styles from './ProductDetailTop.module.scss';
import { Col, Divider, Row } from 'antd';
import { FullscreenOutlined } from '@ant-design/icons';
import Evaluate from '~/components/Evaluate';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Container from '~/components/Container';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

export default function ProductDetailTop({ currentProduct }) {
    console.log('rating', currentProduct?.rating?.rate);
    return (
        <Container>
            <div className={cx('wrapper')}>
                <Row>
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
                                    rate={currentProduct?.rating?.rate || 5} // will fix it in the future
                                    countRate={currentProduct?.rating.count}
                                    isDisabled
                                />
                            </div>
                            <span className={cx('price')}>$200</span>
                            <p className={cx('description')}>{currentProduct?.description}</p>
                            <div className={cx('quantity')}>
                                <span>Qty:</span>
                                <div className={cx('input-group')}>
                                    <button className={cx('input-group__prepend')}>-</button>
                                    <input
                                        type="number"
                                        min={1}
                                        max={100}
                                        value={1}
                                        onChange={() => {
                                            console.log('input number change');
                                        }}
                                    />
                                    <button className={cx('input-group__append')}>+</button>
                                </div>
                            </div>
                            <div className={cx('btn-group')}>
                                <Button primary outline>
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
