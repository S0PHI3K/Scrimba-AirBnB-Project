import React from 'react'
import travel from '../Images/travel.jpg'

export default function Hero () {
    return (
        <section className='Hero'>
            <img src={travel} alt='Travel Pictures' className='TravelLogo'/>
            <h1 className='HeroHeader'>Online Experiences</h1>
            <p className='HeroInfo'>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}