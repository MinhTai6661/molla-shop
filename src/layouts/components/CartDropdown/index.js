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

const cx = className.bind(style);
function CartDropdown(props) {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('list')} tabIndex="-1">
                <DropdownItem />
                <DropdownItem />
                <DropdownItem />
                <DropdownItem />
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
