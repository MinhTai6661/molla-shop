import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import ProductsCarousel from '~/components/ProductsCarousel';
import { get } from '~/utils/axiosRequest';
import styles from './SuggestProducts.module.scss';

const cx = classNames.bind(styles);
function SuggestProducts({ currentProduct }) {
    const [currentProductList, setCurrentProductList] = useState([]);
    useEffect(() => {
        const getProductListsByCat = async () => {
            const res = await get(`/products/category/${currentProduct?.category}`);
            const realData = res.filter((item) => item.id !== currentProduct.id);
            setCurrentProductList(realData);
        };
        getProductListsByCat();
    }, [currentProduct]);
    return (
        <div className={cx('wrapper')}>
            {currentProductList.length > 0 && (
                <>
                    <h2> You may also like</h2>
                    <ProductsCarousel listProducts={currentProductList} />
                </>
            )}
        </div>
    );
}

SuggestProducts.propTypes = {};

export default SuggestProducts;
