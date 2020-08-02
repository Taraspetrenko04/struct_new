import React, { Component } from "react";
import './style.scss';
import template from '../../img/template.jpg';


export default class Services extends Component{
    state = {
        url:  '/details/img/template.jpg',
        services : [
            {id: 1, name:'Новое строительство', url: '/image/template.jpg'},
            {id: 2, name:'Реконструкция', url: '../img/template.jpg'},
            {id: 3, name:'Дизайн и Архитектура', url: '../../img/template.jpg'}, 
        ]
    }
    render(){
        console.log(window.location);
        const { services } = this.state;
        return(
            
            <section className='services'>
                <ul className='services-items'>
                    {services.map( (item) => {
                        return(
                            <li key={item.id} className='services-item'>
                                <img src={template} alt={template} className='services-image'/>
                                <h2 className='services-title'>{item.name}</h2>
                                <p className='services-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </li>
                        )
                    })}
                </ul> 
            </section>
        )
    }
}