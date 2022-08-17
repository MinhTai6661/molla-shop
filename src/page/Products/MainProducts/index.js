import React from 'react';
import classNames from 'classnames/bind';
import styles from './MainProducts.module.scss';
import { Col, Row, Select } from 'antd';
import ProductItem from '~/components/ProductItem';
import { useSelector } from 'react-redux';
import { productsSelector } from '~/redux/selector';

const { Option } = Select;
const cx = classNames.bind(styles);

export default function MainProducts() {
    const { allProducts } = useSelector(productsSelector);

    const handleChange = () => {
        console.log('change select');
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('top')}>
                <div className={cx('filter')}>
                    <span className={cx('showing')}>
                        Showing <span className={cx('number')}>5 of 48</span> Products
                    </span>
                </div>
                <div className={cx('sort')}>
                    <label>Sort by: </label>
                    <div className={cx('select')}>
                        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="disabled" disabled>
                                Disabled
                            </Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </div>
                </div>
            </div>
            <ul className={cx('list')}>
                <Row
                    gutter={[
                        { xs: 0, md: 10, lg: 20, xxl: 30 },
                        { xs: 0, md: 10, lg: 20, xxl: 30 },
                    ]}
                >
                    {allProducts &&
                        allProducts.map((item) => (
                            <Col key={item.id} xs={24} sm={24} md={12} lg={8}>
                                <ProductItem
                                    id={item.id}
                                    category={item.category}
                                    image={item.image}
                                    price={item.price}
                                    title={item.title}
                                    rate={item.rating.rate}
                                    countRate={item.rating.count}
                                />
                            </Col>
                        ))}
                </Row>
            </ul>
        </div>
    );
}
