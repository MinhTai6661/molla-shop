import Footer from '../components/Footer';
import Header from '../components/Header';

function DefaultLayout({ children }) {
    return (
        <div className="default-layout">
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default DefaultLayout;
