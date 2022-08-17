import React, { useState } from 'react';
import ProductDetailTop from './components/ProductDetailTop';
import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import ProductsCarousel from '~/components/ProductsCarousel';
import SuggestProducts from './components/SuggestProducts';
import Container from '~/components/Container';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { productsSelector } from '~/redux/selector';

const cx = classNames.bind(styles);
export default function ProductDetail() {
    const { allProducts } = useSelector(productsSelector);
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
