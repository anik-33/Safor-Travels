import React from 'react';
import Navbar from '../component/common/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/common/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;