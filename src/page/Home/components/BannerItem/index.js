import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './BannerItem.module.scss';
import Button from '~/components/Button';
import config from '~/config';

const cx = classNames.bind(styles);
function BannerItem({ background, topSuggest, title, bottomSuggest, btnContent }) {
    const styleBackground = {
        background: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50%',
        backgroundSize: 'cover',
    };
    return (
        <div className={cx('wrapper')} style={styleBackground}>
            <div className={cx('inner')}>
                <span className={cx('top-suggest')}>{topSuggest}</span>
                <h1 className={cx('tiltle')}> {title}</h1>
                <span className={cx('bottom-suggest')}>{bottomSuggest}</span>
                <Button to={config.router.products} className={cx('btn')} rouded outline>
                    {btnContent}
                </Button>
            </div>
        </div>
    );
}

BannerItem.propTypes = {
    background: PropTypes.string,
    topSuggest: PropTypes.string,
    title: PropTypes.string,
    bottomSuggest: PropTypes.string,
    btnContent: PropTypes.string,
};

export default BannerItem;
