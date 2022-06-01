import React from "react";
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className="header">
        <h1>Expensify!</h1>
        <ul>
            <NavLink to='/' activeClassName="is-active" exact={true}><li>Home</li></NavLink>
            <NavLink to='/create' activeClassName="is-active"><li>Create</li></NavLink>
            <NavLink to='/edit' activeClassName="is-active"><li>Edit</li></NavLink>
        </ul>
    </header>
)

export default Header