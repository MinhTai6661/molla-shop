import className from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import config from '~/config';
import style from './MenuList.module.scss';
const cx = className.bind(style);

function MenuList({ vertical, className }) {
    return (
        // <div className={cx('navbar', { verical })}>
        //     <div className={cx('menu-header')}>
        //         <span>X</span>
        //         <SearchField normal />
        //     </div>
        <ul className={`${cx('menu-list', { vertical })} ${[className]}`}>
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
                    to={config.router.products}
                >
                    Products
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
                    to={config.router.aboutUs}
                >
                    About us
                </NavLink>
            </li>
        </ul>
        // </div>
    );
}

MenuList.propTypes = {
    vertical: PropTypes.bool,
};

export default MenuList;
