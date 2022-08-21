import { HeartOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Tippy from '@tippyjs/react/headless';
import { Input } from 'antd';
import className from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';
import config from '~/config';
import CartDropdown from '../../CartDropdown';
import style from './menuRight.module.scss';

const { Search } = Input;

const cx = className.bind(style);
function RightHeader({ showHeader, smallDeviceMode }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('right-header')}>
                {!smallDeviceMode && (
                    <div className={cx('search')}>
                        <input className={cx('search-input')} placeholder="Search product..." />
                        <Link to={config.router.products} className={cx('search-icon')}>
                            <SearchOutlined />
                        </Link>
                    </div>
                )}
                <NavLink
                    to={config.router.wishList}
                    className={(nav) => cx('favorite', { active: nav.isActive })}
                >
                    <HeartOutlined />
                </NavLink>

                <Tippy
                    interactive={true}
                    hideOnClick={true}
                    offset={[12, 12]}
                    placement="bottom-end"
                    render={(attrs) => (
                        <div {...attrs}>
                            <CartDropdown />
                        </div>
                    )}
                >
                    <div
                        // to={config.router.cart}
                        className={cx('cart')}
                    >
                        <span className={cx('cart-icon')}>
                            <ShoppingCartOutlined />
                        </span>
                        <span
                            className={cx('cart-quantity')}
                            style={{ borderColor: !showHeader ? '#B1B2B4' : 'var(--header-color)' }}
                        >
                            3
                        </span>
                    </div>
                </Tippy>
            </div>
        </div>
    );
}

export default RightHeader;
