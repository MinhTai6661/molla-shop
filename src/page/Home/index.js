import Brand from './components/Brand';
import CategoriesBaner from './components/CategoriesBaner';
import HomeBanner from './components/HomeBanner';

function HomePage() {
    return (
        <div className="content">
            <HomeBanner />
            <Brand />
            <CategoriesBaner />
            {/* categories */}
        </div>
    );
}

export default HomePage;
