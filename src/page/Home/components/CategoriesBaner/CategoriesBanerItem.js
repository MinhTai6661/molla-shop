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
        <div className={cx('item-wrapper')}>
            <Link
                to={config.router.products}
                className={cx('item', { vertical })}
                style={{ backgroundImage: `url(${img})` }}
            >
                <div className={cx('inner')}>
                    <div to={config.router.products} className={cx('content')}>
                        <h3 className={cx('subtitle')}>{subTitle}</h3>
                        <h2 className={cx('title')}>{title}</h2>
                        <span className={cx('btn')} to={config.router.products}>
                            {btnContent} <ArrowRightOutlined />
                        </span>
                    </div>
                </div>
            </Link>
        </div>
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
