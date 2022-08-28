import { useEffect } from 'react';
import Brand from './components/Brand';
import CategoriesBaner from './components/CategoriesBaner';
import HomeBanner from './components/HomeBanner';
import HomeContact from './components/HomeContact';
import TrendyProducts from './components/TrendyProducts';
import VideoBanner from './components/VideoBanner';

function HomePage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="content" style={{ width: '100%', overflow: 'hidden' }}>
            <HomeBanner />
            <Brand />
            <CategoriesBaner />
            <TrendyProducts />
            <VideoBanner />
            <HomeContact />
        </div>
    );
}

export default HomePage;
