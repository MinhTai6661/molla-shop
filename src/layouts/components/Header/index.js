import className from 'classnames/bind';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useLocation } from 'react-router-dom';
import { deviceModeSelector, headerShowSelector } from '~/redux/selector';
import { handleShowHeader } from '~/redux/showSlice';
import style from './Header.module.scss';
import LeftHeader from './LeftHeader';
import RightHeader from './RightHeader';

const cx = className.bind(style);

// const routes = [{ path: '/ ' }];

// const useCurrentPath = () => {
//     const location = useLocation();
//     const [{ route }] = matchRoutes(routes, location);

//     return route.path;
// };

function Header() {
    const dispatch = useDispatch();
    const currentRouter = useLocation().pathname;

    useEffect(() => {
        if (currentRouter === '/') {
            dispatch(window.scrollY > 100 ? handleShowHeader(true) : handleShowHeader(false));
        } else {
            dispatch(handleShowHeader(true));
        }
    });

    useEffect(() => {
        const handleEvent = () => {
            dispatch(window.scrollY > 100 ? handleShowHeader(true) : handleShowHeader(false));
        };
        window.addEventListener('scroll', handleEvent);

        return () => {
            window.removeEventListener('scroll', handleEvent);
        };
    }, []);

    const screenSize = useSelector(deviceModeSelector);
    const isShowHeader = useSelector(headerShowSelector);
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
