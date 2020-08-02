import React, { Component } from 'react';
import './style.scss';
import architecture from '../../img/architecture.jpg';
import construction from '../../img/construction.jpg';
import renovation from '../../img/renovation.jpg';

export default class OurProjects extends Component{
    render(){
        return(
            <section className='projects'>
                <h2 className='projects-title'>Наши работы</h2>
                <ul className='projects-items'>
                    <li className='projects-item architecture'></li>
                    <li className='projects-item construction'></li>
                    <li className='projects-item renovation'></li>
                </ul>
            </section>
        )
    }
}