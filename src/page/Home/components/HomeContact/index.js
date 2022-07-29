import { Col, Row } from 'antd';
import classNames from 'classnames/bind';
import React from 'react';
import Container from '~/components/Container';
import styles from './HomeContact.module.scss';
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

export default function HomeContact() {
    return (
        <div className={cx('wrapper')}>
            <Container>
                <Row>
                    <Col xs={24} lg={12}>
                        <div className={cx('social')}>
                            <h4 className={cx('social__title')}>Shop Social</h4>
                            <p className={cx('social__desc')}>
                                Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
                                mauris sit amet orci.
                            </p>
                            <div className={cx('social__networks')}>
                                <span></span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
