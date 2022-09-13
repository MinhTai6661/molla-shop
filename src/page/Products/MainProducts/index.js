import { Col, Pagination, Row, Select, Spin } from 'antd';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '~/components/ProductItem';
import {
    currentListProductsSelector,
    currentPageSelector,
    filteredProductsSelector,
    orderTypeSelector,
    searchTextSelector,
    sortTypeSelector,
} from '~/redux/selector';
import { changeCurrentPage, changeOrderType, changeSortType } from '../listProductsSlice';
import './custom.scss';
import styles from './MainProducts.module.scss';

const { Option } = Select;
const cx = classNames.bind(styles);

export default function MainProducts() {
    const dispatch = useDispatch();
    const filteredProducts = useSelector(filteredProductsSelector);
    const currentList = useSelector(currentListProductsSelector);
    const searchText = useSelector(searchTextSelector);
    const sortType = useSelector(sortTypeSelector);
    const orderType = useSelector(orderTypeSelector);
    const currentPage = useSelector(currentPageSelector);
    const isLoading = useSelector((state) => state.listProducts.isLoading);
    console.log('MainProducts ~ isLoading', isLoading);

    const [productsPerPage, setProductsPerPage] = useState(9);
    const currentQntProducts = useRef(null);

    const handleSortTypeChange = (value) => {
        dispatch(changeSortType(value));
    };
    const handleOrderByChange = (value) => {
        dispatch(changeOrderType(value));
    };

    const handleChangePage = (pageNumber) => {
        dispatch(changeCurrentPage(pageNumber));
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className="products__main-products">
            <div className={cx('top')}>
                <div className={cx('filter')}>
                    <span className={cx('showing')}>
                        Showing{' '}
                        <span className={cx('number')}>
                            {currentQntProducts.current} of {filteredProducts.length}
                        </span>{' '}
                        Products
                    </span>
                </div>

                <div className={cx('sortGroup')}>
                    <div className={cx('sort')}>
                        <label>Sort by: </label>
                        <div className={cx('select')}>
                            <Select
                                value={sortType}
                                defaultValue="default"
                                style={{ width: 120 }}
                                onChange={handleSortTypeChange}
                            >
                                <Option value="default">Default</Option>
                                <Option value="mostRate">Most rate</Option>
                            </Select>
                        </div>
                    </div>
                    <div className={cx('sort')}>
                        <label>Order by: </label>
                        <div className={cx('select')}>
                            <Select
                                value={orderType}
                                defaultValue="default"
                                style={{ width: 120 }}
                                onChange={handleOrderByChange}
                                className="products__order-by"
                            >
                                <Option value="default">Default</Option>
                                <Option value="lowest">Lowest to highest</Option>
                                <Option value="highest">Highest to lowest</Option>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
            <span className={cx('searched-message')}>
                {searchText !== ''
                    ? currentList.length > 0
                        ? `There are ${currentList.length} result for "${searchText}"`
                        : `There are't any result! for "${searchText}"`
                    : ''}
            </span>
            {isLoading ? (
                <Row
                    gutter={[
                        { xs: 0, md: 10, lg: 20, xxl: 30 },
                        { xs: 10, sm: 10, lg: 20, xxl: 30 },
                    ]}
                >
                    {[1, 2, 3].map(() => (
                        <Col xs={24} sm={24} md={12} lg={8}>
                            <ProductItem isLoading />
                        </Col>
                    ))}
                </Row>
            ) : (
                <>
                    <ul className={cx('list')}>
                        <Row
                            gutter={[
                                { xs: 0, md: 10, lg: 20, xxl: 30 },
                                { xs: 10, sm: 10, lg: 20, xxl: 30 },
                            ]}
                        >
                            {filteredProducts &&
                                filteredProducts?.length > 0 &&
                                filteredProducts.map((item, index) => {
                                    if (Math.ceil(++index / productsPerPage) === currentPage) {
                                        currentQntProducts.current =
                                            index > productsPerPage
                                                ? index - productsPerPage
                                                : index;

                                        return (
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
                                        );
                                    }
                                })}
                        </Row>
                    </ul>
                    <Pagination
                        defaultCurrent={1}
                        current={currentPage}
                        defaultPageSize={productsPerPage}
                        total={filteredProducts?.length || 0}
                        onChange={handleChangePage}
                    />
                </>
            )}
        </div>
    );
}
