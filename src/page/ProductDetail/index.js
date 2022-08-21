import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Container from '~/components/Container';
import { allProductsSelector } from '~/redux/selector';
import ProductDetailTop from './components/ProductDetailTop';
import SuggestProducts from './components/SuggestProducts';
import styles from './ProductDetail.module.scss';

const cx = classNames.bind(styles);
export default function ProductDetail() {
    const allProducts = useSelector(allProductsSelector);

    const { productId } = useParams();

    const currentProduct = allProducts.find((item) => item.id === Number(productId));

    return (
        <Container>
            {currentProduct && (
                <>
                    <ProductDetailTop currentProduct={currentProduct} />
                    <SuggestProducts currentProduct={currentProduct} />
                </>
            )}
        </Container>
    );
}
