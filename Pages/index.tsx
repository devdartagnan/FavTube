import React from 'react'
import Menu from '../Styles/Homepage/Menu.js'
import Header from '../Components/Header'
import Timeline from '../Components/Timeline'
import Profiles from '../Components/Favprofiles'
import { CSSReset } from '../Styles/CSSReset'
import Home from '../Styles/Homepage/Home.js'

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
