import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import { fetchAllProductsFix } from './page/Products/listProductsSlice';
import { changeDeviceMode, changeSize } from './redux/deviceModeSlice';
import { fetchAllCaregories, fetchAllProducts } from './redux/productsSlice';
import publicRoutes from './routes';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllProducts());
        dispatch(fetchAllCaregories());
        dispatch(fetchAllProductsFix());
    }, []);

    useEffect(() => {
        dispatch(changeSize(window.innerWidth));
        dispatch(changeDeviceMode(window.innerWidth >= 992 ? 'large' : 'small'));

        const handleEvent = () => {
            dispatch(changeSize(window.innerWidth));
            dispatch(changeDeviceMode(window.innerWidth >= 992 ? 'large' : 'small'));
        };

        window.addEventListener('resize', handleEvent);
        return () => {
            window.removeEventListener('scroll', handleEvent);
        };
    }, []);

    return (
        <GlobalStyle>
            <Routes>
                {publicRoutes.map((route) => {
                    let Component = route.component;
                    let Layout = route.layout;
                    return (
                        <Route
                            key={route.path.toString}
                            path={route.path}
                            element={
                                <Layout>
                                    <Component />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </GlobalStyle>
    );
}

export default App;
