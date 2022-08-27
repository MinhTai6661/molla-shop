import React from 'react';
import classNames from 'classnames/bind';
import Banner from '~/components/Banner';
import styles from './Cart.module.scss';
import Container from '~/components/Container';
import { Col, Row } from 'antd';
import CartDetail from './CartDetail';
import CartCheckout from './CartCheckout';
import { useSelector } from 'react-redux';
const cx = classNames.bind(styles);

export default function CartPage() {
    const cart = useSelector((state) => state.cart);
    console.log('CartPage ~ cart', cart);
    return (
        <div className={cx('wrapper')}>
            <Banner title="cart" />
            <div className={cx('content')}>
                <Container>
                    <Row
                        gutter={[
                            { xs: 0, md: 20 },
                            { xs: 0, md: 20 },
                        ]}
                    >
                        <Col xs={24} md={16}>
                            <CartDetail />
                        </Col>
                        <Col xs={24} md={8}>
                            <CartCheckout />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
