import React from 'react';
import Navbar from '../component/common/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/common/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
             <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default RootLayout;