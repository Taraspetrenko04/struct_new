import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import './style.scss';


export default class NavbarItems extends Component {
    state = {
        active: false
    }

    menuHandleClick = () => {
        this.setState({
            active : !this.state.active
        })
    }

    render() {
        const { active } = this.state;
        let btnStyle = 'header__button-menu';
        let styleLine = 'header__line';
        let styleLine02 = 'header__line02';
        let styleLineTop = 'header__line-top';
        let styleLineBotoom = 'header__line-bottom';
        let nav = 'navbar-list';
     
        if( active ){
            styleLine += ' active01';
            styleLine02 += ' active02';
            styleLineTop += ' active-before';
            styleLineBotoom += ' active-before';
            nav += ' navbar-active';
        }

        return(
            <div className='navbar-items'>
                <ul className={ nav }>
                    <li className='navbar-item' onClick={ this.menuHandleClick }><NavLink className='navbar-link' to='/' >Главная</NavLink></li>
                    <li className='navbar-item' onClick={ this.menuHandleClick }><NavLink className='navbar-link' to='/about' >О нас</NavLink></li>
                    <li className='navbar-item' onClick={ this.menuHandleClick }><NavLink className='navbar-link' to='/services'>Услуги</NavLink></li>
                    <li className='navbar-item' onClick={ this.menuHandleClick }><NavLink className='navbar-link' to='/references'>Отзывы</NavLink></li>
                    <li className='navbar-item' onClick={ this.menuHandleClick }><NavLink className='navbar-link' to='/contacts'>Контакты</NavLink></li>
                </ul>
 
                <div className={btnStyle} onClick={ this.menuHandleClick }>
                    <span className={ styleLineTop }></span>
                    <span className={ styleLine }></span>
                    <span className={ styleLine02 }></span>
                    <span className={ styleLineBotoom }></span>
                 </div>
            </div>
        )
    }
}