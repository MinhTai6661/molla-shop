import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Evaluate.module.scss';
import { Rate } from 'antd';
const cx = classNames.bind(styles);

function Evaluate({ countRate, rate, isDisabled }) {
    return (
        <div className={cx('evaluate')}>
            <div className={cx('rate')}>
                <Rate
                    className={cx('rate-icon')}
                    allowHalf
                    disabled={isDisabled}
                    defaultValue={rate}
                />
            </div>
            <div className={cx('review')}>({countRate})</div>
        </div>
    );
}

Evaluate.propTypes = {
    rate: PropTypes.number,
    countRate: PropTypes.number,
    isDisabled: PropTypes.bool,
};

export default Evaluate;
