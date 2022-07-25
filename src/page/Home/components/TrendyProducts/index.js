import classNames from 'classnames/bind';
import Slider from 'react-slick';
import Container from '~/components/Container';
import ProductItem from '~/components/ProductItem';
import styles from './TrendyProducts.module.scss';

const cx = classNames.bind(styles);
function TrendyProducts() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        dots: 'none',
    };

    return (
        <Container xs={23} lg={18}>
            <div className={cx('wrapper')}>
                <h2 className={cx('"title"')}>Trendy products</h2>

                <div className={cx('product-list')}>
                    <Slider {...settings}>
                        <ProductItem
                            category="adidas"
                            image="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                            price={1000}
                            title="Mens Cotton Jacket"
                            rate={4.5}
                        />
                        <ProductItem
                            category="adidas"
                            image="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                            price={1000}
                            title="Mens Cotton Jacket"
                            rate={4.5}
                        />
                        <ProductItem
                            category="adidas"
                            image="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                            price={1000}
                            title="Mens Cotton Jacket"
                            rate={4.5}
                        />
                        <ProductItem
                            category="adidas"
                            image="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                            price={1000}
                            title="Mens Cotton Jacket"
                            rate={4.5}
                        />
                        <ProductItem
                            category="adidas"
                            image="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                            price={1000}
                            title="Mens Cotton Jacket"
                            rate={4.5}
                        />
                    </Slider>
                </div>
            </div>
        </Container>
    );
}

export default TrendyProducts;
