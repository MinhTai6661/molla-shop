import GlobalStyle from './components/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import publicRoutes from './routes';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { resizeX, resizeY } from './redux/resizeSlice';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        const handleEvent = () => {
            dispatch(resizeY(window.scrollY));
        };
        window.addEventListener('scroll', handleEvent);

        return () => {
            window.addEventListener('scroll', handleEvent);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        const handleEvent = () => {
            dispatch(resizeX(window.innerWidth));
        };
        window.addEventListener('resize', handleEvent);

        return () => {
            window.addEventListener('scroll', handleEvent);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
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
