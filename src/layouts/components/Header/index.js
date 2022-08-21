import className from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import Container from '~/components/Container';
import { headerShowSlector, deviceModeSlelector } from '~/redux/selector';
import { handleShowHeader } from '~/redux/showSlice';
import style from './Header.module.scss';
import LeftHeader from './LeftHeader';
import RightHeader from './RightHeader';
import { useDispatch } from 'react-redux/es/exports';
import { useLocation, matchRoutes } from 'react-router-dom';
import config from '~/config';

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
            console.log('handleEvent ~ currentRouter', currentRouter);
            dispatch(window.scrollY > 100 ? handleShowHeader(true) : handleShowHeader(false));

            console.log('hello');
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
