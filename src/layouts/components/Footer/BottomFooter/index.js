import React from 'react';
import classNames from 'classnames/bind';
import styles from './BottomFooter.module.scss';
import { Col, Row } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

export default function BottomFotter() {
    return (
        <Row>
            <Col xs={24} sm={12}>
                <div className={cx('left')}>
                    <p>Copyright © 2022 Molla Store. All Rights Reserved</p>
                </div>
            </Col>
            <Col xs={24} sm={12}>
                <div className={cx('right')}>
                    <span className={cx('label')}>Social Media</span>
                    <ul className={cx('list-icon')}>
                        <li>
                            <a href="#" className={cx('facebook')}>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </li>
                        <li>
                            <a href="#" className={cx('instagram')}>
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                        <li>
                            <a href="#" className={cx('youtube')}>
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </li>
                    </ul>
                </div>
            </Col>
        </Row>
    );
}
