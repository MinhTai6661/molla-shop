/* eslint-disable jsx-a11y/alt-text */
import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import config from '~/config';
import MenuList from '../../MenuList';
import style from './LeftHeader.module.scss';

const cx = className.bind(style);
function LeftHeader() {
    return (
        <div className={cx('menu')}>
            <span className={cx('menu-log')}></span>
            <Link to={config.router.home}>
                <img
                    className={cx('menu-logo')}
                    src="https://d-themes.com/react/molla/demo-5/images/logo.png"
                />
            </Link>
            {/* ={screenWidth < 992} */}
            <MenuList />
        </div>
    );
}

export default LeftHeader;
