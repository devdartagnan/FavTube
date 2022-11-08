import React from 'react'
import Header from '../Components/Header'
import Timeline from '../Components/Timeline'
import { CSSReset } from '../Styles/CSSReset'
import Menu from '../Styles/Homepage/Menu.js'
import Home from '../Styles/Homepage/Home.js'
import Profiles from '../Components/Favprofiles'

export default function HomePage() {
    return (
        <Home>
            <CSSReset />
            <Menu />
            <Header />
            <Timeline />
            <Profiles />
        </Home>
    )

}
