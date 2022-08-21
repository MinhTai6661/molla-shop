import React, { useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Collapse, Menu, Slider } from 'antd';
import './CustomCollapse.scss';
import styles from './FilterGroup.module.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import {
    currentCatSelector,
    allCategriesSelector,
    allProductsSelector,
    filteredProductsSelector,
    filteredProductsNotCatSelector,
} from '~/redux/selector';
import PriceRange from './PriceRange';
import { current } from '@reduxjs/toolkit';
import {
    changeCategory,
    changeCurrentPage,
    fetchProductsByCategory,
} from '../../listProductsSlice';
import { type } from '@testing-library/user-event/dist/type';
import { get } from '~/utils/axiosRequest';

const cx = classNames.bind(styles);
const { Panel } = Collapse;

function MenuDropDown(props) {
    const dispatch = useDispatch();
    const currentCategory = useSelector(currentCatSelector);
    const filteredProducts = useSelector(filteredProductsSelector);
    const filteredProductsNotCat = useSelector(filteredProductsNotCatSelector);
    const allCategries = useSelector(allCategriesSelector);
    const [currentCollapses, setCurrentCollapses] = useState([]);

    const listQntByCategories = useMemo(() => {
        return allCategries.reduce((acc, curr) => {
            let count = 0;
            filteredProductsNotCat.forEach((product) => {
                if (curr === product.category) {
                    count++;
                }
            });
            return [...acc, count];
        }, []);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allCategries, filteredProductsNotCat.length, filteredProductsNotCat]);

    const onChangeCollapse = (key) => {
        setCurrentCollapses(key);
    };

    useEffect(() => {
        dispatch(fetchProductsByCategory(currentCategory));
    }, [currentCategory]);

    const handleChangeCategoryItem = (category) => {
        dispatch(changeCategory(category));
        dispatch(changeCurrentPage(1));
    };

    return (
        <div className="sidebar__menu">
            <Collapse bordered={false} defaultActiveKey={['1', '2']} onChange={onChangeCollapse}>
                <Panel header="Category" key="1">
                    <div
                        className={cx('collapse-content__item', {
                            active: currentCategory === 'all',
                        })}
                        onClick={() => handleChangeCategoryItem('all')}
                    >
                        <span className={cx('collapse-content__title')}>all</span>
                        <span className={cx('collapse-content__count')}>
                            {listQntByCategories.reduce((total, curr) => total + curr, 0)}
                        </span>
                    </div>
                    {allCategries &&
                        allCategries.length &&
                        allCategries.map((item, index) => (
                            <div
                                className={cx('collapse-content__item', {
                                    active: currentCategory === item,
                                })}
                                key={item}
                                onClick={() => handleChangeCategoryItem(item)}
                            >
                                <span className={cx('collapse-content__title')}>{item}</span>
                                <span className={cx('collapse-content__count')}>
                                    {listQntByCategories[index]}
                                </span>
                                {/* sua sau */}
                            </div>
                        ))}
                </Panel>
                <Panel header="Price" key="2">
                    <PriceRange currentCollapses={currentCollapses} />
                </Panel>
            </Collapse>
        </div>
    );
}

MenuDropDown.propTypes = {};

export default MenuDropDown;
