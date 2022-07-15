import className from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';
import config from '~/config';
import style from './menuRight.module.scss';
import { Input } from 'antd';
import { HeartOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Tippy from '@tippyjs/react/headless';

const { Search } = Input;

const cx = className.bind(style);
function RightHeader() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('right-header')}>
                <div className={cx('search')}>
                    <input className={cx('search-input')} placeholder="Search product..." />
                    <SearchOutlined className={cx('search-icon')} />
                </div>
                <NavLink
                    to={config.router.wishList}
                    className={(nav) => cx('favorite', { active: nav.isActive })}
                >
                    <HeartOutlined />
                </NavLink>
                <NavLink
                    to={config.router.cart}
                    className={(nav) => cx('cart', { active: nav.isActive })}
                >
                    <ShoppingCartOutlined />
                    <span className={cx('cart-quantity')}>3</span>
                </NavLink>

                <Tippy
                    render={(attrs) => (
                        <div style={{ background: '#999' }} tabIndex="-1" {...attrs}>
                            My tippy box
                        </div>
                    )}
                >
                    <button>My button</button>
                </Tippy>
            </div>
        </div>
    );
}

export default RightHeader;
