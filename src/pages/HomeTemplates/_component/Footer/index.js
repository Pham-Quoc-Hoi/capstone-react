import React, { Component } from 'react'

export default class FooterHome extends Component {
    render() {
        return (
            <footer className='bg-dark'>
                <div className='container'>
                    <div className='row py-5 text-white'>
                        <div className="footer__left col-12 col-sm-6 col-lg-6">
                            <h3>Movie In Hand</h3>
                            <p>197 Học viện công nghệ Bưu chính Viễn Thông Quận 9, Thành Phố Hồ Chí Minh</p>
                            <span>Call us: (+84)39 888 4505</span>
                        </div>
                        <div className="footer__item col-6 col-sm-6 col-lg-3">
                            <h4>Chính sách</h4>
                            <ul>
                                <li>Terms of Use</li>
                                <li>Privacy Policy</li>
                                <li>Security</li>
                            </ul>
                        </div>
                        <div className="footer__item col-6 col-sm-6 col-lg-3">
                            <h4>Tài Khoản</h4>
                            <ul>
                                <li>My Account</li>
                                <li>Watchlist</li>
                                <li>Collections</li>
                                <li>User Guide</li>
                            </ul>
                        </div>
                    </div>
                    <div className='d-flex mx-5'>
                        <div className='text-success mr-auto'>Made by Phạm Quốc Hội</div>
                        <div className='text-primary'>
                            <a href='/#'> Back To Top
                                <i className="fa-solid fa-arrow-up-from-bracket mx-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer >
        )
    }
}
