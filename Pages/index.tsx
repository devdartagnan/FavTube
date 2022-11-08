import React from 'react'
import Menu from '../Styles/Homepage/Menu.js'
import Header from '../Components/Header.js'
import Timeline from '../Components/Timeline.js'
import { CSSReset } from '../Styles/CSSReset'
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
