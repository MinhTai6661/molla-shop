import React from 'react';
import PropTypes from 'prop-types';
import styles from './Sumary.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Sumary({ children, title, className }) {
    return (
        <div className={cx('wrapper', { [className]: !!className })}>
            <h3 className={cx('title')}> {title}</h3>
            {children}
        </div>
    );
}

Sumary.propTypes = {
    title: PropTypes.string,
};

export default Sumary;
