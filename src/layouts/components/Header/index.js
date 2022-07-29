import className from 'classnames/bind';
import { useEffect } from 'react';
import { useSelector } from 'react-redux/es/exports';
import Container from '~/components/Container';
import { headerShowSlector, deviceModeSlelector } from '~/redux/selector';
import { handleShowHeader } from '~/redux/showSlice';
import style from './Header.module.scss';
import LeftHeader from './LeftHeader';
import RightHeader from './RightHeader';
import { useDispatch } from 'react-redux/es/exports';
const cx = className.bind(style);

function Header() {
    const dispatch = useDispatch();
    useEffect(() => {
        const handleEvent = () => {
            dispatch(window.scrollY > 100 ? handleShowHeader(true) : handleShowHeader(false));
        };
        window.addEventListener('scroll', handleEvent);

        return () => {
            window.removeEventListener('scroll', handleEvent);
        };
    }, []);

    const screenSize = useSelector(deviceModeSlelector);
    const isShowHeader = useSelector(headerShowSlector);
    return (
        <div className={cx('wrapper', { 'show-color': isShowHeader })}>
            <div className={cx('inner')}>
                <div className={cx('left')}>
                    <LeftHeader smallDeviceMode={screenSize.deviceMode === 'small'} />
                </div>
                <div className={cx('right')}>
                    <RightHeader
                        showHeader={isShowHeader}
                        smallDeviceMode={screenSize.deviceMode === 'small'}
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;
