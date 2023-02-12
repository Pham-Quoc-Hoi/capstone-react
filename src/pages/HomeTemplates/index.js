import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import FooterHome from './_component/Footer'
import NavbarHome from './_component/NavbarHome'

export default class HomeTemplate extends Component {
    render() {
        return (
            <div>
                <NavbarHome />
                <Outlet />
                <br />
                <br />
                <br />
                <FooterHome />
            </div>
        )
    }
}
