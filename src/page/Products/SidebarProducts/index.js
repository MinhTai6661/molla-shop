import React from 'react';
import classNames from 'classnames/bind';
import styles from './SidebarProducts.module.scss';
import MenuDropDown from './FilterGroup';

const cx = classNames.bind(styles);

export default function SidebarProducts() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('label')}>
                <span className={cx('filter')}>Filter</span>
                <span className={cx('clear-all')}>Clear All</span>
            </div>
            <div className={cx('filter__list')}>
                <MenuDropDown />
            </div>
        </aside>
    );
}
