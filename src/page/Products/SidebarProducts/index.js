import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SidebarProducts.module.scss';
import MenuDropDown from './FilterGroup';
import { useDispatch } from 'react-redux';
import { clearAll } from '../listProductsSlice';
import { FilterOutlined, SettingOutlined } from '@ant-design/icons';

const cx = classNames.bind(styles);

export default function SidebarProducts() {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handeClearAll = () => {
        setShow(false);
        dispatch(clearAll());
    };
    return (
        <div className={cx('wrapper', { show })}>
            <div className={cx('overlay')} onClick={() => setShow(false)}></div>
            <aside className={cx('sidebar')}>
                <div className={cx('label')}>
                    <span className={cx('filter')}>Filter</span>
                    <span className={cx('clear-all')} onClick={handeClearAll}>
                        Clear All
                    </span>
                </div>

                <div className={cx('filter__list')}>
                    <MenuDropDown setShowSidebar={setShow} />
                </div>
                <button
                    className={cx('toggle')}
                    onClick={() => {
                        setShow((prevState) => !prevState);
                    }}
                >
                    <FilterOutlined className={cx('toggle-icon')} />
                </button>
            </aside>
        </div>
    );
}
