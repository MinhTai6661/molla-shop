import className from 'classnames/bind';
import style from './CartDropdown.module.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import config from '~/config';
import { CloseOutlined } from '@ant-design/icons';
import formatter from '~/config/format';
const cx = className.bind(style);

function DropdownItem({ product }) {
    return (
        <li className={cx('item')}>
            <Link to={config.router.cart} className={cx('link')}>
                <div className={cx('info')}>
                    <h3 className={cx('title')}>{product.title} </h3>
                    <div className={cx('money')}>
                        <span className={cx('money__quantity')}>{product.quantity}</span> x{' '}
                        <span className={cx('money__price')}>
                            {formatter.format(product.price)}
                        </span>
                    </div>
                </div>
                <div className={cx('right__info')}>
                    <div>
                        <img className={cx('thumb__img')} src={product.image} alt="thumb" />
                    </div>
                </div>
            </Link>
            <span className={cx('delete')}>
                <CloseOutlined />
            </span>
        </li>
    );
}

DropdownItem.propTypes = {
    product: PropTypes.object,
};

export default DropdownItem;
