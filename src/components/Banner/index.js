import React from 'react';
import PropTypes from 'prop-types';
import styles from './Banner.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Banner({ title }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h1>{title}</h1>
                <h2>Molla shop</h2>
            </div>
        </div>
    );
}

Banner.propTypes = { title: PropTypes.string.isRequired };

export default Banner;
