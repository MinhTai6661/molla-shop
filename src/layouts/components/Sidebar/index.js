import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';
import SearchField from '~/components/Search';
import MenuList from '../MenuList';
import { CloseOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { sidebarShowSelector } from '~/redux/selector';
import { toggleShowSidebar } from '~/redux/showSlice';

const cx = classNames.bind(style);
function Sidebar() {
    const isShow = useSelector(sidebarShowSelector);
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(toggleShowSidebar());
    };
    return (
        <div className={cx('wrapper', { isShow })}>
            <div className={cx('overlay')} onClick={handleClose}></div>
            <div className={cx('sidebar')}>
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
