import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import ListMoviePages from './_component/ListMoviePages'
import FooterHome from './_component/Footer'
import NavbarHome from './_component/NavbarHome'

export default class HomeTemplate extends Component {
    render() {
        return (
            <div>
                <NavbarHome />
                <ListMoviePages />
                <Outlet />
                <br />
                <br />
                <br />
                <FooterHome />
            </div>
        )
    }
}
