import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Loan List</Link></li>
                <li><Link to="/add-loan">Add Loan</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;