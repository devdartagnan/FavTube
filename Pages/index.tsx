import React from 'react'
import Header from '../Components/Header'
import Timeline from '../Components/Timeline'
import { CSSReset } from '../Styles/CSSReset'
import Menu from '../Styles/Menu.js'
import Home from '../Styles/Home'

export default function HomePage() {
    return (
        <Home>
            <CSSReset />
            <Menu />
            <Header />
            <Timeline />
        </Home>
    )

}
