import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import Container from '~/components/Container';
import ProductItem from '~/components/ProductItem';
import { productsSelector } from '~/redux/selector';
import styles from './TrendyProducts.module.scss';
import settings from './settings';
import { useEffect, useRef, useState } from 'react';
import { get } from '~/utils/axiosRequest';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { fetchProductByCaregories } from '~/redux/productsSlice';
const cx = classNames.bind(styles);

function TrendyProducts() {
    const slider = useRef();
    const { allProducts, allCategries } = useSelector(productsSelector);
    const [currentCat, setCurrentCat] = useState('all');
    const [currentProducts, setCurrentProducts] = useState([]);

    const handleChangeCat = (category) => {
        setCurrentCat(category);
    };
    useEffect(() => {
        const getProduct = async () => {
            const path = `products/category/${currentCat !== 'all' && currentCat}`;
            const res = await get(path);
            setCurrentProducts(currentCat !== 'all' ? res : allProducts);
        };
        getProduct();
    }, [currentCat]);

    return (
        <Container>
            <div className={cx('wrapper')}>
                <h2 className={cx('title')}>Trendy products</h2>
                <ul className={cx('category')}>
                    <li
                        className={`${cx('category__item', {
                            active: currentCat === 'all',
                        })} underline`}
                        onClick={() => setCurrentCat('all')}
                    >
                        <h3>All</h3>
                    </li>
                    {allCategries.length &&
                        allCategries.map((item) => (
                            <li
                                key={item}
                                className={cx('category__item', {
                                    active: currentCat === item,
                                    // active: currentCat === 'all',
                                })}
                                onClick={() => {
                                    handleChangeCat(item);
                                }}
                            >
                                <h3>{item}</h3>
                            </li>
                        ))}
                </ul>
                <div className={cx('product-list')}>
                    <button
                        className={cx('btn-prev')}
                        onClick={() => {
                            slider.current.slickPrev();
                        }}
                    >
                        <LeftOutlined />
                    </button>
                    <Slider
                        {...settings}
                        ref={(c) => {
                            slider.current = c;
                        }}
                    >
                        {currentProducts.length
                            ? currentProducts.map((item) => (
                                  <div key={item.id}>
                                      <ProductItem
                                          category={item.category}
                                          image={item.image}
                                          price={item.price}
                                          title={item.title}
                                          rate={item.rating.rate}
                                          countRate={item.rating.count}
                                      />
                                  </div>
                              ))
                            : allProducts.map((item) => (
                                  <div key={item.id}>
                                      <ProductItem
                                          category={item.category}
                                          image={item.image}
                                          price={item.price}
                                          title={item.title}
                                          rate={item.rating.rate}
                                          countRate={item.rating.count}
                                      />
                                  </div>
                              ))}
                    </Slider>
                    <button
                        className={cx('btn-next')}
                        onClick={() => {
                            slider.current.slickNext();
                        }}
                    >
                        <RightOutlined />
                    </button>
                </div>
            </div>
        </Container>
    );
}

export default TrendyProducts;
