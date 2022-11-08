import React from 'react'
import StyledHeader from '../Styles/Header.js'
import config from '../config.json'

export default function Header() {
    return (
        <StyledHeader>
            <div className='Banner'>
                <div className='Banner__img'></div>
            </div>

            <div className='Profile'>
                <img className='Profile__img' src={`https://www.github.com/${config.github}.png`} alt="Undefined" />
                <div>
                    <h1>{config.name}</h1>
                    <h2>{config.description}</h2>
                </div>
            </div>
        </StyledHeader>
    )
}
