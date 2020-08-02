import React, { Component } from 'react';
import './style.scss';
import NavbarItems from './NavbarItems/NavbarItems';
import NavbarLogo from './NavbarLogo/NavbarLogo';



export default class Navbar extends Component {
    render() {
        return(
            <div className='navbar'>
                <NavbarLogo />
                <NavbarItems />
            </div>
        )
    }
}