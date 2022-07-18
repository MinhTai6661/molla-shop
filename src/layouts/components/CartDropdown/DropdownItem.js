import className from 'classnames/bind';
import style from './CartDropdown.module.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import config from '~/config';
const cx = className.bind(style);

function DropdownItem(props) {
    return (
        <li className={cx('item')}>
            <Link to={config.router.cart} className={cx('link')}>
                <div className={cx('info')}>
                    <h3 className={cx('title')}>giày name bitis </h3>
                    <div className={cx('money')}>
                        <span className={cx('money__quantity')}>3</span>
                        <span className={cx('money__price')}> $100</span>
                    </div>
                </div>
                <div className={cx('right__info')}>
                    <div>
                        <img
                            className={cx('thumb__img')}
                            src="https://d-themes.com/react_asset_api/molla/uploads/product_4_1_b1a40364bb.jpg"
                            alt="thumb"
                        />
                    </div>
                    <span className={cx('delete')}>x</span>
                </div>
            </Link>
        </li>
    );
}

DropdownItem.propTypes = {};

export default DropdownItem;
