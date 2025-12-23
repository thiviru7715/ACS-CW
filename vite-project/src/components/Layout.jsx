import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <header className="layout-header">
            <div className="header-content">
                <Link to="/" className="logo">
                    PropertyFinder
                </Link>
            </div>
        </header>
    );
};
const Footer = () => {
    return (
        <footer className="layout-footer">
            <div className="footer-bottom">
                <p>&copy; 2025 PropertyFinder. All rights reserved.</p>
            </div>
        </footer>
    );
};

const Layout = () => {
    return (
        <div className="layout">
            <Header />
            <main className="layout-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
