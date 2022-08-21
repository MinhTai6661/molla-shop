import React from 'react';
import PropTypes from 'prop-types';
import { SearchOutlined } from '@ant-design/icons';
import className from 'classnames/bind';
import style from './search.module.scss';
import { Input } from 'antd';
import Button from '../Button';
import { Link } from 'react-router-dom';
import config from '~/config';
const { Search } = Input;

const cx = className.bind(style);
function SearchField({ className, normal }) {
    return (
        <div className={className}>
            <div className={cx('search', { normal })}>
                <input className={cx('search-input')} placeholder="Search product..." />
                <Link to={config.router.product} className={cx('search-icon')}>
                    <SearchOutlined />
                </Link>
            </div>
        </div>
    );
}

SearchField.propTypes = {};

export default SearchField;
