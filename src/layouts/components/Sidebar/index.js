import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';
import SearchField from '~/components/Search';
import MenuList from '../MenuList';
import { CloseOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { sidebarShowSlector } from '~/redux/selector';
import { toggleShow } from '~/redux/sidebarShowSlice';

const cx = classNames.bind(style);
function Sidebar() {
    const isShow = useSelector(sidebarShowSlector);
    const dispatch = useDispatch();
    console.log('Sidebar ~ isShow', isShow);

    const handleClose = () => {
        console.log('hehe');
        dispatch(toggleShow());
    };
    return (
        <div className={cx('sidebar', { isShow })}>
            <div className={cx('overlay')}></div>
            <div className={cx('menu')}>
                <div className={cx('header')}>
                    <span className={cx('close')} onClick={handleClose}>
                        <CloseOutlined />
                    </span>
                    <SearchField normal />
                </div>
                <MenuList vertical className={cx('menu-list')} />
            </div>
        </div>
    );
}

Sidebar.propTypes = {};

export default Sidebar;
