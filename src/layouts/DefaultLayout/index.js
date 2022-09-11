import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useSelector } from 'react-redux/es/exports';
import { deviceModeSelector } from '~/redux/selector';
import { useState } from 'react';

function DefaultLayout({ children }) {
    const screenSize = useSelector(deviceModeSelector);

    return (
        <div className="default-layout">
            <Header />
            {screenSize.deviceMode === 'small' && <Sidebar />}
            <div className="main-content">{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
