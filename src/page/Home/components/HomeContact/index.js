import { Col, Row } from 'antd';
import classNames from 'classnames/bind';
import React from 'react';
import Container from '~/components/Container';
import styles from './HomeContact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { ArrowRightOutlined } from '@ant-design/icons';

const cx = classNames.bind(styles);

export default function HomeContact() {
    return (
        <div className={cx('wrapper')}>
            <Container>
                <Row>
                    <Col xs={24} lg={12}>
                        <div className={cx('social')}>
                            <h4 className={cx('title')}>Shop Social</h4>
                            <p className={cx('desc')}>
                                Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
                                mauris sit amet orci.
                            </p>
                            <div className={cx('social__networks')}>
                                <span className={cx('facebook')}>
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </span>
                                <span className={cx('instagram')}>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </span>
                                <span className={cx('youtube')}>
                                    <FontAwesomeIcon icon={faYoutube} />
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} lg={12}>
                        <div className={cx('deal')}>
                            <h4 className={cx('title')}>Get the Latest Deals</h4>

                            <p className={cx('desc')}>
                                and receive <span className={cx('active')}>$20 coupon</span> for
                                first shopping
                            </p>

                            <div className={cx('input-group')}>
                                <input type="text" placeholder="Type your email..." />
                                <button>
                                    <ArrowRightOutlined />
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
