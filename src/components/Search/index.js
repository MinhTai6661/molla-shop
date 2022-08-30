import React from 'react';
import PropTypes from 'prop-types';
import { SearchOutlined } from '@ant-design/icons';
import className from 'classnames/bind';
import style from './search.module.scss';
import { Input } from 'antd';
import Button from '../Button';
import { Link } from 'react-router-dom';
import config from '~/config';
import Tippy from '@tippyjs/react/headless';

const { Search } = Input;

const cx = className.bind(style);
function SearchField({ className, normal }) {
    return (
        <Tippy
            visible
            placement="bottom-start"
            offset={[0, 13]}
            render={(attrs) => (
                <div className={cx('suggest-products')} tabIndex="-1" {...attrs}>
                    My tippy
                </div>
            )}
        >
            <div className={cx('search', { normal })}>
                <input className={cx('search-input')} placeholder="Search product..." />

                <Link to={config.router.products} className={cx('search-icon')}>
                    <SearchOutlined />
                </Link>
            </div>
        </Tippy>
    );
}

SearchField.propTypes = {};

export default SearchField;
