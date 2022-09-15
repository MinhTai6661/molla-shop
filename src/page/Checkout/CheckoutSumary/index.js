import React from 'react';
import Sumary from '~/components/Sumary';

import classNames from 'classnames/bind';
import styles from './CheckoutSumary.module.scss';
import Button from '~/components/Button';
import { useSelector } from 'react-redux';
import { cartProductsSelector } from '~/redux/selector';
import config from '~/config';

const cx = classNames.bind(styles);

export default function CheckoutSumary() {
    const cartProducts = useSelector(cartProductsSelector);
    console.log('CheckoutSumary ~ cartProducts', cartProducts);

    return (
        <Sumary className={cx('wrapper')} title="your order">
            <div className={cx('products')}>
                <div className={cx('products__label')}>
                    <span> Product</span>
                    <span> Total</span>
                </div>
                <ul className={cx('list')}>
                    {cartProducts &&
                        cartProducts.length &&
                        cartProducts.map((product) => (
                            <li className={cx('item')} key={product.id}>
                                <div className={cx('info')}>
                                    <span className={cx('name')}>{product.title}</span>
                                    <span className={cx('quantity')}> x{product.quantity}</span>
                                </div>
                                <span className={cx('price')}>
                                    {config.formatter.format(product.price)}
                                </span>
                            </li>
                        ))}
                </ul>
            </div>
            <div className={cx('title')}>
                <span> Subtotal: </span>
                <span> $200 </span>
            </div>
            <div className={cx('title')}>
                <span> shipping: </span>
                <span> $200 </span>
            </div>
            <div className={cx('title', { total: true })}>
                <span> total: </span>
                <span> $200 </span>
            </div>
            <Button outline primary full type="submit">
                Place order
            </Button>
        </Sumary>
    );
}
