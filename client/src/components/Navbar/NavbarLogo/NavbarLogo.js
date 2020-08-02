import React, { Component } from 'react';
import './style.scss';
import logo from '../../../img/Logo.png';


export default class NavbarItems extends Component {
    render() {
        return(
            <div className='navbar-logo'>
                <a href='#'><img src={ logo } alt='logo'></img></a>
            </div>
        )
    }
}