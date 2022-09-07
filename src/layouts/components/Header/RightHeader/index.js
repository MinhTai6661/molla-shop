import { HeartOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Tippy from '@tippyjs/react/headless';
import { Input } from 'antd';
import className from 'classnames/bind';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import SearchField from '~/components/Search';
import config from '~/config';
import { cartTotalProductsSelector } from '~/redux/selector';
import CartDropdown from '../../CartDropdown';
import style from './menuRight.module.scss';

const { Search } = Input;

const cx = className.bind(style);
function RightHeader({ showHeader, smallDeviceMode }) {
    const totalQuantity = useSelector(cartTotalProductsSelector);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('right-header')}>
                {!smallDeviceMode && (
                    <div className={cx('search')}>
                        <SearchField />
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
                    hideOnClick
                    offset={[12, 12]}
                    placement="bottom-end"
                    render={(attrs) => (
                        <div {...attrs}>
                            <CartDropdown />
                        </div>
                    )}
                >
                    <Link to={config.router.cart} className={cx('cart')}>
                        <span className={cx('cart-icon')}>
                            <ShoppingCartOutlined />
                        </span>
                        <span
                            className={cx('cart-quantity')}
                            style={{ borderColor: !showHeader ? '#B1B2B4' : 'var(--header-color)' }}
                        >
                            {totalQuantity <= 99 ? totalQuantity : '99+'}
                        </span>
                    </Link>
                </Tippy>
            </div>
        </div>
    );
}

export default RightHeader;
