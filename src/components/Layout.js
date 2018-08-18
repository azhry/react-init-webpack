import React from 'react';
import { Link } from 'react-router-dom';

import { pullRight, h1 } from './layout.css';

const Layout = ({ children }) => {
    return (
        <div>
            <Link to="/">
                ReactJS App with Webpack 4
            </Link>
            {children}
            <p className={pullRight}>
                Made with love by Azhary Arliansyah
            </p>
        </div>
    );
};

export default Layout;