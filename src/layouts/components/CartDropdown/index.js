import className from 'classnames/bind';
import style from './CartDropdown.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import config from '~/config';
import { Dropdown } from 'antd';
import DropdownItem from './DropdownItem';
import Button from '~/components/Button';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { cartProductsSelector, cartTotalProductsSelector } from '~/redux/selector';

const cx = className.bind(style);
function CartDropdown(props) {
    const cartProducts = useSelector(cartProductsSelector);

    console.log('CartDropdown ~ cartProducts', cartProducts);

    return (
        <div className={cx('wrapper')}>
            <ul className={cx('list')} tabIndex="-1">
                {cartProducts && cartProducts.length > 0 ? (
                    cartProducts.map((product) => (
                        <DropdownItem key={product.id} product={product} />
                    ))
                ) : (
                    <h3>no have any product on cart</h3>
                )}
            </ul>
            <div className={cx('footer')}>
                <div className={cx('total')}>
                    <span className={cx('total__label')}>TOTAL:</span>
                    <span className={cx('total__price')}>$123</span>
                </div>
                <div className={cx('btn__group')}>
                    <Button to="/cart" primary fill>
                        View Cart
                    </Button>
                    <Button to="/checkout" outline primary rightIcon={<ArrowRightOutlined />}>
                        Checkout
                    </Button>
                </div>
            </div>
        </div>
    );
}

CartDropdown.propTypes = {};

export default CartDropdown;
