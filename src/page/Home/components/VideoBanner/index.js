import React, { useState } from 'react';
import styles from './VideoBanner.module.scss';
import classNames from 'classnames/bind';
import { CaretRightOutlined } from '@ant-design/icons';

const cx = classNames.bind(styles);

export default function VideoBanner() {
    const [isShowing, setIsShowing] = useState(false);

    const handleSetShow = () => {
        setIsShowing(!isShowing);
    };

    return (
        <div
            className={cx('wrapper')}
            style={{
                backgroundImage: `url("${'https://d-themes.com/react/molla/demo-5/images/home/bg-2.jpg'}")`,
            }}
        >
            <div className={cx('inner')}>
                <span className={cx('label')}>NEW COLLECTION</span>
                <h3 className={cx('title')}>Winter’19 / Spring’20</h3>

                <button className={cx('play-btn')} onClick={handleSetShow}>
                    <div className={cx('main-btn')}>
                        <CaretRightOutlined className={cx('icon')} />
                    </div>
                    <span className={cx('shadow')}></span>
                </button>
            </div>

            <div className={cx('video-show', { isShowing })}>
                <div className={cx('overlay')} onClick={handleSetShow}></div>
                <div className={cx('video')}>
                    {isShowing && (
                        <div className={cx('wrapper-iframe')}>
                            <iframe
                                src="https://www.youtube.com/embed/vBPgmASQ1A0"
                                title="GEORGES HOBEIKA Haute Couture Autumn Winter 2018/19 collection"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
