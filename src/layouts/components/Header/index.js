import { Link } from 'react-router-dom';
import config from '~/config';
import LeftHeader from './LeftHeader';
import RightHeader from './RightHeader';
import className from 'classnames/bind';
import style from './Header.module.scss';
import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
const cx = className.bind(style);

function Header() {
    const [showHeader, setShowHeader] = useState(false);
    useEffect(() => {
        const handleEvent = () => {
            console.log(window.scrollY);
            setShowHeader(window.scrollY >= 100 && true);
        };
        window.addEventListener('scroll', handleEvent);

        return window.addEventListener('scroll', handleEvent);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log(showHeader);
    return (
        <Row className={cx('header', { 'show-color': showHeader })}>
            <Col span={12}>
                <LeftHeader />
            </Col>
            <Col span={12}>
                <RightHeader />
            </Col>
        </Row>
    );
}

export default Header;
