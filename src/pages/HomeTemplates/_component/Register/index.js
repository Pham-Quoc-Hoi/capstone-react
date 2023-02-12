import React, { Component } from 'react'

export default class RegisterHome extends Component {
    render() {
        return (

            <div className='container'>
                <div className='row py-5'>
                    <div className="col-12 col-sm-6 col-lg-6">
                        <h1>Chèn Hình ảnh</h1>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-6">
                        <h1>ĐĂNG KÝ</h1>

                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Tài khoản" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Mật khẩu" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Nhập lại mật khẩu" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Họ tên" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Số điện thoại" />
                            </div>

                            <div className='d-flex justify-content-between'>
                                <a className="btn btn-success" href='/register'>Đăng ký</a>

                                <a className="text-primary ml-auto" href='/login'>
                                    Đăng nhập
                                    <i class='fas fa-arrow-circle-right mx-2'></i>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
