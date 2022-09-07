import className from 'classnames/bind';
import style from './CartDropdown.module.scss';
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import config from '~/config';
import { Dropdown } from 'antd';
import DropdownItem from './DropdownItem';
import Button from '~/components/Button';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { cartProductsSelector, cartTotalProductsSelector } from '~/redux/selector';
import formatter from '~/config/format';
import images from '~/assets/images';

const cx = className.bind(style);
function CartDropdown() {
    const cartProducts = useSelector(cartProductsSelector);

    const subTotal = useMemo(() => {
        return cartProducts.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
    }, [cartProducts]);

    return (
        <div className={cx('wrapper')}>
            <ul className={cx('list')} tabIndex="-1">
                {cartProducts && cartProducts.length > 0 ? (
                    cartProducts.map((product) => (
                        <DropdownItem key={product.id} product={product} />
                    ))
                ) : (
                    <>
                        <div className={cx('empty')}>
                            <img src={images.emptyCart} />
                            <h3>no have any product on cart</h3>
                        </div>
                    </>
                )}
            </ul>
            <div className={cx('footer')}>
                <div className={cx('total')}>
                    <span className={cx('total__label')}>TOTAL:</span>
                    <span className={cx('total__price')}>{formatter.format(subTotal)}</span>
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
