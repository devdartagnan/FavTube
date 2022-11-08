import React from 'react'
import config from '../config.json'
import StyledFav from '../Styles/Homepage/Favprofiles.js'
import { uuid as uuidv4 } from 'uuidv4';

export default function Profiles() {
    console.log(uuidv4)
    console.log(uuidv4)
    const perfis = Object.keys(config.perfis)
    return (
        <StyledFav>
            <h3>FavTube Favoritos</h3>
            <section className='favoritos'>
                {perfis.map((perfil) => {
                    const profile = config.perfis[perfil]
                    return (
                        <div className='perfil'>
                            <img src={`https://www.github.com/${profile.git}.png`} alt="" />
                            <span>
                                {profile.url}
                            </span>
                        </div>)
                })}
            </section>
        </StyledFav>
    )
}
//