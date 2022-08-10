import React from 'react';
import classNames from 'classnames/bind';
import styles from './TopFooter.module.scss';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import config from '~/config';
const cx = classNames.bind(styles);

export default function TopFooter() {
    return (
        <div className={cx('wrapper')}>
            <Row>
                <Col xs={24} lg={12}>
                    <div className={cx('left')}>
                        <span className={cx('logo')}>
                            <img
                                className={cx('logo-img')}
                                src="https://d-themes.com/react/molla/demo-5/images/logo-footer.png"
                                alt="logo"
                            />
                        </span>
                        <p className={cx('text')}>
                            Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu
                            vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi,
                            tincidunt quis, accumsan porttitor, facilisis luctus, metus.
                        </p>
                        <div className={cx('contact')}>
                            <span>Got Question? Call us 24/7</span>
                            <h4 className={cx('phone-number')}>0368004546</h4>
                        </div>
                    </div>
                </Col>
                <Col xs={24} lg={12}>
                    <div className={cx('right')}>
                        <Row>
                            <Col xs={24} sm={8}>
                                <div className={cx('widget')}>
                                    <h4 className={cx('widget__title')}>information</h4>
                                    <ul className={cx('widget__list')}>
                                        <li className={cx('widget__item')}>
                                            <Link
                                                className={cx('widget__link')}
                                                to={config.router.home}
                                            >
                                                about us
                                            </Link>
                                        </li>
                                        <li className={cx('widget__item')}>
                                            <Link
                                                className={cx('widget__link')}
                                                to={config.router.home}
                                            >
                                                contact us
                                            </Link>
                                        </li>
                                        <li className={cx('widget__item')}>
                                            <Link
                                                className={cx('widget__link')}
                                                to={config.router.home}
                                            >
                                                login
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs={24} sm={8}>
                                <div className={cx('widget')}>
                                    <h4 className={cx('widget__title')}>Customer Service</h4>
                                    <ul className={cx('widget__list')}>
                                        <li className={cx('widget__item')}>
                                            <Link
                                                className={cx('widget__link')}
                                                to={config.router.home}
                                            >
                                                Terms and conditions
                                            </Link>
                                        </li>
                                        <li className={cx('widget__item')}>
                                            <Link
                                                className={cx('widget__link')}
                                                to={config.router.home}
                                            >
                                                Privacy Policy
                                            </Link>
                                        </li>
                                        <li className={cx('widget__item')}>
                                            <Link
                                                className={cx('widget__link')}
                                                to={config.router.home}
                                            >
                                                Returns
                                            </Link>
                                        </li>
                                        <li className={cx('widget__item')}>
                                            <Link
                                                className={cx('widget__link')}
                                                to={config.router.home}
                                            >
                                                Shipping
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs={24} sm={8}>
                                <div className={cx('widget')}>
                                    <h4 className={cx('widget__title')}>My Account</h4>
                                    <ul className={cx('widget__list')}>
                                        <li className={cx('widget__item')}>
                                            <Link
                                                className={cx('widget__link')}
                                                to={config.router.home}
                                            >
                                                Sign In
                                            </Link>
                                        </li>
                                        <li className={cx('widget__item')}>
                                            <Link
                                                className={cx('widget__link')}
                                                to={config.router.home}
                                            >
                                                View Cart
                                            </Link>
                                        </li>
                                        <li className={cx('widget__item')}>
                                            <Link
                                                className={cx('widget__link')}
                                                to={config.router.home}
                                            >
                                                My Wishlist
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
