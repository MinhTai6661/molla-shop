import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useSelector } from 'react-redux/es/exports';
import { resize } from '~/redux/selector';
import { useState } from 'react';

function DefaultLayout({ children }) {
    const screenSize = useSelector(resize);

    return (
        <div className="default-layout">
            <Header />

            {screenSize.x < 992 && <Sidebar />}
            {children}
            <Footer />
        </div>
    );
}

export default DefaultLayout;
