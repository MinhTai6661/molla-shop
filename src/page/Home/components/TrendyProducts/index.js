import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Container from '~/components/Container';
import ProductsCarousel from '~/components/ProductsCarousel';
import { allCategriesSelector, allProductsSelector } from '~/redux/selector';
import { get } from '~/utils/axiosRequest';
import styles from './TrendyProducts.module.scss';
const cx = classNames.bind(styles);

function TrendyProducts() {
    const slider = useRef();
    const allProducts = useSelector(allProductsSelector);
    const allCategries = useSelector(allCategriesSelector);
    const [currentCat, setCurrentCat] = useState('all');
    const [currentProducts, setCurrentProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleChangeCat = (category) => {
        setCurrentCat(category);
    };
    useEffect(() => {
        const getProduct = async () => {
            try {
                setIsLoading(true);
                const path = `products/category/${currentCat !== 'all' && currentCat}`;
                const res = await get(path);
                setCurrentProducts(currentCat !== 'all' ? res : allProducts);
                setIsLoading(false);
            } catch (error) {
                alert('Something went wrong !');
            }
        };
        getProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    {currentProducts.length ? (
                        <ProductsCarousel isLoading={isLoading} listProducts={currentProducts} />
                    ) : (
                        allProducts &&
                        allProducts.length && (
                            <ProductsCarousel isLoading={isLoading} listProducts={allProducts} />
                        )
                    )}
                </div>
            </div>
        </Container>
    );
}

export default TrendyProducts;
