import className from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import Container from '~/components/Container';
import { resize, sidebarShowSlector } from '~/redux/selector';
import style from './Header.module.scss';
import LeftHeader from './LeftHeader';
import RightHeader from './RightHeader';

const cx = className.bind(style);

function Header() {
    const screenSize = useSelector(resize);
    const dispatch = useDispatch();
    return (
        <div className={cx('header', { 'show-color': screenSize.y >= 100 })}>
            <Container xs={23} className={`${cx('container')}`}>
                <div className={cx('inner')}>
                    <div className={cx('left')}>
                        <LeftHeader smallDeviceMode={screenSize.x <= 992} />
                    </div>
                    <div className={cx('right')}>
                        <RightHeader showHeader={screenSize.y >= 100} />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Header;
