import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import classNames from 'classnames/bind';
import styles from '../Cart.module.scss';
import { Radio, Space } from 'antd';
import Button from '~/components/Button';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { changeShippingPrice, changeSubtotal } from '../cartSlice';
import { cartProductsSelector } from '~/redux/selector';
import formatter from '~/config/format';
import Sumary from '~/components/Sumary';
import config from '~/config';

const cx = classNames.bind(styles);

function CartCheckout(props) {
    const dispatch = useDispatch();
    const allProductsCart = useSelector(cartProductsSelector);
    const shippingPrice = useSelector((state) => state.cart.shippingPrice);
    const subTotal = useSelector((state) => state.cart.subTotal);
    const handleChangeRadioValue = (e) => {
        dispatch(changeShippingPrice(e.target.value));
    };

    useEffect(() => {
        const result = allProductsCart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
        dispatch(changeSubtotal(result));
    }, [allProductsCart]);

    const handeSubmit = () => {};
    return (
        <Sumary className={cx('checkout')} title="cart total">
            <div className={cx('subtotal')}>
                <h4>subtotal</h4>
                <span className={cx('subtotal-price')}> {formatter.format(subTotal)}</span>
            </div>

            <div className={cx('shipping')}>
                <h4>shipping</h4>
                <Radio.Group value={shippingPrice} onChange={handleChangeRadioValue}>
                    <Space direction="vertical" defaultValue={1}>
                        <Radio value={0}>
                            <div className={cx('shipping__item')}>
                                <span>Free Shipping</span>{' '}
                                <span className={cx('shipping__price')}>$0.00</span>
                            </div>
                        </Radio>
                        <Radio value={10}>
                            <div className={cx('shipping__item')}>
                                <span>standard</span>{' '}
                                <span className={cx('shipping__price')}>$10.00</span>
                            </div>
                        </Radio>
                        <Radio value={20}>
                            <div className={cx('shipping__item')}>
                                <span>express</span>{' '}
                                <span className={cx('shipping__price')}>$20.00</span>
                            </div>
                        </Radio>
                    </Space>
                </Radio.Group>
            </div>
            <div className={cx('total')}>
                <span>Total:</span>
                <span> {formatter.format(subTotal + shippingPrice)}</span>
            </div>

            <Button
                to={config.router.checkout}
                style={{ width: '100%' }}
                type="submit"
                outline
                primary
                rightIcon={<ArrowRightOutlined />}
                onClick={handeSubmit}
            >
                Checkout
            </Button>
        </Sumary>
    );
}

CartCheckout.propTypes = {};

export default CartCheckout;
