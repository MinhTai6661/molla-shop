import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Collapse, Menu, Slider } from 'antd';
import './CustomCollapse.scss';
import styles from './FilterGroup.module.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { currentCatSelector, productsSelector } from '~/redux/selector';
import PriceRange from './PriceRange';
import { current } from '@reduxjs/toolkit';
import { changeCat } from '../../listProductsSlice';

const cx = classNames.bind(styles);
const { Panel } = Collapse;

function MenuDropDown(props) {
    const dispatch = useDispatch();
    const currentCategory = useSelector(currentCatSelector);
    const { allCategries } = useSelector(productsSelector);

    const [currentCollapses, setCurrentCollapses] = useState([]);
    console.log('MenuDropDown ~ currentCollapses', currentCollapses);

    const onChangeCollapse = (key) => {
        console.log(key);
        setCurrentCollapses(key);
    };

    const handleClickCategoryItem = (category) => {
        console.log('handleClickCategoryItem ~ category', category);
        dispatch(changeCat(category));
    };

    return (
        <div className="sidebar__menu">
            <Collapse bordered={false} defaultActiveKey={['1', '2']} onChange={onChangeCollapse}>
                <Panel header="Category" key="1">
                    {allCategries &&
                        allCategries.length &&
                        allCategries.map((item) => (
                            <div
                                className={cx('collapse-content__item', {
                                    active: currentCategory === item,
                                })}
                                key={item}
                                onClick={() => handleClickCategoryItem(item)}
                            >
                                <span className={cx('collapse-content__title')}>{item}</span>{' '}
                                <span className={cx('collapse-content__count')}>5</span>{' '}
                                {/* sua sau */}
                            </div>
                        ))}
                </Panel>
                <Panel header="This is panel header 2" key="2">
                    <PriceRange currentCollapses={currentCollapses} />
                </Panel>
            </Collapse>
        </div>
    );
}

MenuDropDown.propTypes = {};

export default MenuDropDown;
