/* eslint-disable jsx-a11y/alt-text */
import { Col, Row } from 'antd';
import className from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';
import config from '~/config';
import style from './LeftHeader.module.scss';

const cx = className.bind(style);
function LeftHeader() {
    return (
        <div className={cx('menu')}>
            <div>
                <Link to={config.router.home}>
                    <img
                        className={cx('menu-logo')}
                        src="https://d-themes.com/react/molla/demo-5/images/logo.png"
                    />
                </Link>
            </div>
            <ul className={cx('menu-list')}>
                <li className={cx('menu-item')}>
                    <NavLink
                        className={(nav) => cx('menu-link', { active: nav.isActive })}
                        to={config.router.home}
                    >
                        Home
                    </NavLink>
                </li>
                <li className={cx('menu-item')}>
                    <NavLink
                        className={(nav) => cx('menu-link', { active: nav.isActive })}
                        to={config.router.contact}
                    >
                        contact
                    </NavLink>
                </li>
                <li className={cx('menu-item')}>
                    <NavLink
                        className={(nav) => cx('menu-link', { active: nav.isActive })}
                        to={config.router.product}
                    >
                        Product
                    </NavLink>
                </li>
                <li className={cx('menu-item')}>
                    <NavLink
                        className={(nav) => cx('menu-link', { active: nav.isActive })}
                        to={config.router.aboutUs}
                    >
                        About us
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default LeftHeader;
