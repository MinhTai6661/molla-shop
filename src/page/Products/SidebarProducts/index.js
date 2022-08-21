import { FilterOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearAll } from '../listProductsSlice';
import MenuDropDown from './FilterGroup';
import styles from './SidebarProducts.module.scss';

const cx = classNames.bind(styles);

export default function SidebarProducts() {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handeClearAll = () => {
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
                    <MenuDropDown />
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
