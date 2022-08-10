import { Col, Divider, Row } from 'antd';
import Container from '~/components/Container';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import TopFooter from './TopFooter';
import BottomFotter from './BottomFooter';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <Container>
            <div className={cx('wrapper')}>
                <TopFooter />
                <div className={cx('divider')}></div>
                <BottomFotter />
            </div>
        </Container>
    );
}

export default Footer;
