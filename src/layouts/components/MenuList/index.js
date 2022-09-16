import className from 'classnames/bind';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import config from '~/config';
import { hideSidebar, toggleShowSidebar } from '~/redux/showSlice';
import style from './MenuList.module.scss';
const cx = className.bind(style);

function MenuList({ vertical, className }) {
    const dispatch = useDispatch();
    const handleClickMenuItem = () => {
        dispatch(hideSidebar());
        window.scrollTo(0, 0);
    };

    return (
        <ul className={`${cx('menu-list', { vertical })} ${[className]}`}>
            <li className={cx('menu-item')}>
                <NavLink
                    onClick={handleClickMenuItem}
                    className={(nav) => cx('menu-link', { active: nav.isActive })}
                    to={config.router.home}
                >
                    Home
                </NavLink>
            </li>

            <li className={cx('menu-item')}>
                <NavLink
                    onClick={handleClickMenuItem}
                    className={(nav) => cx('menu-link', { active: nav.isActive })}
                    to={config.router.products}
                >
                    Products
                </NavLink>
            </li>
            <li className={cx('menu-item')}>
                <NavLink
                    onClick={handleClickMenuItem}
                    className={(nav) => cx('menu-link', { active: nav.isActive })}
                    to={config.router.contact}
                >
                    contact
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
