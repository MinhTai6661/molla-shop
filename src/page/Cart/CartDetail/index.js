import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from '../Cart.module.scss';
import QuantityProduct from '~/components/QuantityProduct';
import { CloseOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantity, removeFromCart } from '../cartSlice';
import { message, Popconfirm } from 'antd';
import formatter from '~/config/format';

const cx = classNames.bind(styles);

function CartDetail(props) {
    const dispatch = useDispatch();
    const cartList = useSelector((state) => state.cart.products);
    console.log('CartDetail ~ cartList', cartList);

    const handleChangeQuantity = (quantity, id) => {
        dispatch(changeQuantity({ quantity, id }));
    };
    const handleDeleteProduct = (id) => {
        dispatch(removeFromCart(id));
    };
    const handleConfirm = (id) => {
        message.info('remove successful!');
        dispatch(removeFromCart(id));
    };
    return (
        <div className={cx('detail')}>
            {cartList && cartList.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>product</th>
                            <th>price</th>
                            <th>quantity</th>
                            <th>total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartList &&
                            cartList.length &&
                            cartList.map((product) => (
                                <tr key={product.id}>
                                    <td>
                                        <div className={cx('detail__info')}>
                                            <div className={cx('detail__thumb')}>
                                                <img src={product?.image} alt="product name" />
                                            </div>
                                            <h4 className={cx('detail__title')}>
                                                {product?.title}
                                            </h4>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={cx('detail__price')}>
                                            {formatter.format(product?.price)}
                                        </span>
                                    </td>
                                    <td>
                                        <QuantityProduct
                                            defaultValue={product?.quantity || 1}
                                            size="medium"
                                            onChange={(value) =>
                                                handleChangeQuantity(value, product.id)
                                            }
                                        />
                                    </td>
                                    <td>
                                        <span className={cx('detail__total')}>
                                            {formatter.format(product.price * product.quantity)}
                                        </span>
                                    </td>
                                    <td>
                                        <Popconfirm
                                            className={cx('detail__delete')}
                                            placement="right"
                                            title="Do you want to remove this product from cart ?"
                                            onConfirm={() => handleConfirm(product.id)}
                                            okText="Yes"
                                            cancelText="No"
                                        >
                                            <CloseOutlined />
                                        </Popconfirm>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            ) : (
                <h3>not have any products</h3>
            )}
        </div>
    );
}

CartDetail.propTypes = {};

export default CartDetail;