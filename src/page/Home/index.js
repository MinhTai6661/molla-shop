import Brand from './components/Brand';
import CategoriesBaner from './components/CategoriesBaner';
import HomeBanner from './components/HomeBanner';
import TrendyProducts from './components/TrendyProducts';

function HomePage() {
    return (
        <div className="content">
            <HomeBanner />
            <Brand />
            <CategoriesBaner />
            <TrendyProducts />
        </div>
    );
}

export default HomePage;
