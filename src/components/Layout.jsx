import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import FavouritesPanel from './FavouritePanel';

const Header = () => {
    return (
        <header className="layout-header">
            <div className="header-content">
                <Link to="/" className="logo">
                    <h2>PropertyFinder</h2>
                </Link>
            </div>
        </header>
    );
};
const Footer = () => {
    return (
        <footer className="layout-footer">
            <div className="footer">
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
                <div className="container layout-grid">
                    <section className="page-main">
                        <Outlet />
                    </section>
                    <aside className="layout-aside">
                        <FavouritesPanel />
                    </aside>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
