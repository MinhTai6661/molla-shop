import className from 'classnames/bind';
import style from './CartDropdown.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import config from '~/config';
import { Dropdown } from 'antd';
import DropdownItem from './DropdownItem';
import Button from '~/components/Button';

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
            <div className={cx('total')}>
                <span className={cx('total__label')}>TOTAL:</span>
                <span className={cx('total__price')}>$123</span>
            </div>
            <div className={cx('btn__group')}>
                <Button primary fill>
                    View Cart
                </Button>
                <Button outline primary>
                    Check Out
                </Button>
            </div>
        </div>
    );
}

CartDropdown.propTypes = {};

export default CartDropdown;
