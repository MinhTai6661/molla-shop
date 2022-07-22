import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './CategoriesBaner.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';
import Button from '~/components/Button';
import { ArrowRightOutlined } from '@ant-design/icons';

const cx = classNames.bind(style);
function CategoriesBanerItem({ title, img, subTitle, btnContent, vertical = false }) {
    return (
        <Link
            to={config.router.product}
            className={cx('item', { vertical })}
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className={cx('inner')}>
                <div to={config.router.product} className={cx('content')}>
                    <h3 className={cx('subtitle')}>{subTitle}</h3>
                    <h2 className={cx('title')}>{title}</h2>
                    <span className={cx('btn')} to={config.router.product}>
                        {btnContent} <ArrowRightOutlined />
                    </span>
                </div>
            </div>
        </Link>
    );
}

CategoriesBanerItem.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,
    subTitle: PropTypes.string,
    btnContent: PropTypes.string,
    vertical: PropTypes.bool,
};

export default CategoriesBanerItem;
