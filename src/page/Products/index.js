import React from 'react';
import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import Container from '~/components/Container';
import { Col, Row } from 'antd';
import { Grid, Tag } from 'antd';
import SidebarProducts from './SidebarProducts';
import MainProducts from './MainProducts';
import { currentCatSelector } from '~/redux/selector';
import { useSelector } from 'react-redux';
const { useBreakpoint } = Grid;

const cx = classNames.bind(styles);

export default function Products() {
    const screens = useBreakpoint();
    console.log('Products ~ screens', screens);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner')}>
                <div className={cx('banner__content')}>
                    <h1>Products</h1>
                    <h2>Molla shop</h2>
                </div>
            </div>

            <Container>
                <div className={cx('content')}>
                    <Row gutter={[20, 0]}>
                        <Col xs={0} sm={0} lg={6}>
                            <SidebarProducts />
                        </Col>
                        <Col xs={24} sm={24} lg={18}>
                            <MainProducts />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}
