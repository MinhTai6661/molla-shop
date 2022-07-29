import Slider from 'react-slick';
import tempData from '~/tempData';
import BannerItem from '../BannerItem';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './customSlider.scss';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'none', background: 'red', right: '100px' }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'none', background: 'green' }}
            onClick={onClick}
        />
    );
}
function HomeBanner(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="home-banner">
            <Slider {...settings}>
                {tempData.banners.map((banner) => (
                    <div key={banner.title}>
                        <BannerItem {...banner} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

HomeBanner.propTypes = {};

export default HomeBanner;
