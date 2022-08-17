import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Collapse, Menu, Slider } from 'antd';
import './CustomCollapse.scss';
import styles from './FilterGroup.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const { Panel } = Collapse;

function MenuDropDown(props) {
    const onChangeCollapse = (key) => {
        console.log(key);
    };

    const onSliderChange = (value) => {
        console.log('onChange: ', value);
    };

    const onAfterSliderChange = (value) => {
        console.log('onAfterChange: ', value);
    };
    return (
        <div className="sidebar__menu">
            <Collapse bordered={false} defaultActiveKey={['1']} onChange={onChangeCollapse}>
                <Panel header="Category" key="1">
                    <div className={cx('collapse-content__item')}>
                        <span className={cx('collapse-content__title')}>Furniture</span>{' '}
                        <span className={cx('collapse-content__count')}>5</span>
                    </div>
                    <div className={cx('collapse-content__item')}>
                        <span className={cx('collapse-content__title')}>Electronics</span>{' '}
                        <span className={cx('collapse-content__count')}>10</span>
                    </div>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                    <Slider
                        tooltipPlacement="bottom"
                        tooltipVisible
                        range
                        step={10}
                        defaultValue={[20, 50]}
                        onChange={onSliderChange}
                        onAfterChange={onAfterSliderChange}
                    />
                </Panel>
            </Collapse>
        </div>
    );
}

MenuDropDown.propTypes = {};

export default MenuDropDown;
