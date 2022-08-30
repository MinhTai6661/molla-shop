import React from 'react';
import PropTypes from 'prop-types';
import QuantityProduct from '~/components/QuantityProduct';
import { Popconfirm } from 'antd';
import formatter from '~/config/format';
import classNames from 'classnames/bind';
import styles from '../Cart.module.scss';
import { CloseOutlined } from '@ant-design/icons';
const cx = classNames.bind(styles);

function CartDetailMobile({ cartList, handleChangeQuantity, handleConfirm }) {
    return (
        <div className={cx('detail__mobile')}>
            {cartList &&
                cartList.length &&
                cartList.map((product) => (
                    <div key={product?.id} className={cx('detail__mobile-products')}>
                        <div className={cx('detail__mobile-thumb')}>
                            <img src={product?.image} alt="product name" />
                        </div>
                        <div className={cx('detail__mobile-info')}>
                            <h4 className={cx('detail__mobile-title')}>{product?.title}</h4>
                            <span className={cx('detail__mobile-price')}>
                                Price: {formatter.format(product?.price)}
                            </span>

                            <div>
                                <QuantityProduct
                                    min={1}
                                    className={cx('detail__mobile-quantity')}
                                    defaultValue={product?.quantity || 1}
                                    size="medium"
                                    onChange={(value) => handleChangeQuantity(value, product.id)}
                                />
                            </div>
                            <span className={cx('detail__mobile-total')}>
                                Total: {formatter.format(product.price * product.quantity)}
                            </span>
                        </div>
                        <span className={cx('detail__mobile-del')}>
                            <Popconfirm
                                className={cx('detail__delete')}
                                placement="left"
                                title="Do you want to remove this product from cart ?"
                                onConfirm={() => handleConfirm(product.id)}
                                okText="Yes"
                                cancelText="No"
                            >
                                <CloseOutlined />
                            </Popconfirm>
                        </span>
                    </div>
                ))}
        </div>
    );
}

CartDetailMobile.propTypes = {};

export default CartDetailMobile;
