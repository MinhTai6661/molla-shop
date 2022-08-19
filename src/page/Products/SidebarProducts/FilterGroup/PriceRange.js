import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Slider } from 'antd';
import styles from './FilterGroup.module.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { currentPriceRangeSlector, defaultPriceRangeSlector } from '~/redux/selector';
import { changePriceRange } from '../../listProductsSlice';
const cx = classNames.bind(styles);

function PriceRange({ currentCollapses }) {
    const dispatch = useDispatch();
    const currentPriceRange = useSelector(currentPriceRangeSlector);
    const defaultPriceRange = useSelector(defaultPriceRangeSlector);
    console.log('PriceRange ~ currentPriceRange', currentPriceRange);
    const onSliderChange = (value) => {
        // console.log('onChange: ', value);
    };

    const onAfterSliderChange = (value) => {
        console.log('onAfterChange: ', value);
        dispatch(changePriceRange(value));
    };
    const makeMarks = () => {
        const maxRange = defaultPriceRange[1];

        const ojb = {};
        let step = maxRange / 4 / 2;
        console.log('makeMarks ~ step', step);

        for (let i = 0; i < 4; i++) {
            ojb[i * (maxRange / 4)] = `$${i * (maxRange / 4)}`;
        }
        ojb[maxRange] = `$${maxRange}`;
        return ojb;
    };

    return (
        <div className="products__filter-slide">
            <div className={cx('slide__label')}>
                <div className={cx('range')}>
                    Price Range:
                    <span>${currentPriceRange[0]}</span> - <span>${currentPriceRange[1]}</span>
                </div>
                <span className={cx('filter')}>Filter</span>
            </div>
            <div className={cx('slider')}>
                <Slider
                    marks={makeMarks()}
                    range
                    step={defaultPriceRange[1] / 8}
                    min={0}
                    max={defaultPriceRange[1]}
                    defaultValue={defaultPriceRange}
                    onChange={onSliderChange}
                    onAfterChange={onAfterSliderChange}
                    getTooltipPopupContainer={(triggerNode) => triggerNode}
                />
            </div>
        </div>
    );
}

PriceRange.propTypes = {};

export default PriceRange;
