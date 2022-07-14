import GlobalStyle from './components/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import publicRoutes from './routes';
function App() {
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
