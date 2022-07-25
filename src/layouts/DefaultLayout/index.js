import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useSelector } from 'react-redux/es/exports';
import { deviceModeSlelector } from '~/redux/selector';
import { useState } from 'react';

function DefaultLayout({ children }) {
    const screenSize = useSelector(deviceModeSlelector);

    return (
        <div className="default-layout">
            <Header />

            <Sidebar />
            {children}
            <Footer />
        </div>
    );
}

export default DefaultLayout;
