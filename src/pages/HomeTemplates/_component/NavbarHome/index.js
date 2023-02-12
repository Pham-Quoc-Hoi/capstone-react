import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavbarHome extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <div className='container'>
                    {/* Brand */}
                    <a className="navbar-brand" href="/#">CyberLearn</a>
                    {/* Toggler/collapsibe Button */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/* Navbar links */}
                    <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-1">
                                <NavLink className={({ isActive }) => isActive ? "bg-white text-dark nav-link" : "nav-link"} to="/">Trang chủ</NavLink>
                            </li>
                            <li className="nav-item mx-1">
                                <NavLink className={({ isActive }) => isActive ? "bg-white text-dark nav-link" : "nav-link"} to="/#">Liên hệ</NavLink>
                            </li>
                            <li className="nav-item mx-1">
                                <NavLink className={({ isActive }) => isActive ? "bg-white text-dark nav-link" : "nav-link"} to="/#">Tin tức</NavLink>
                            </li>
                            <li className="nav-item mx-1">
                                <NavLink className={({ isActive }) => isActive ? "bg-white text-dark nav-link" : "nav-link"} to="/#">Ứng dụng</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="align-right">
                        <NavLink className='btn btn-success mx-2' to='/register'>Đăng ký</NavLink>
                        <NavLink className='btn btn-primary mx-2' to='/login'>Đăng nhập</NavLink>
                    </div>
                </div>
            </nav>
        )
    }
}
