import GlobalStyle from './components/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import publicRoutes from './routes';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { changeDeviceMode, changeSize } from './redux/deviceModeSlice';
import { handleShowHeader } from './redux/showSlice';
import { fetchAllCaregories, fetchAllProducts } from './redux/productsSlice';
import { productsSelector } from './redux/selector';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllProducts());
        dispatch(fetchAllCaregories());
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
