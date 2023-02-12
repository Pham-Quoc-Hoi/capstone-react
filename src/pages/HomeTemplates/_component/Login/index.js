import React, { Component } from 'react'

export default class LoginUser extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row py-5'>
                        <div className="col-12 col-sm-6 col-lg-6">
                            <h1>Chèn Hình ảnh</h1>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-6">
                            <h1>ĐĂNG NHẬP</h1>

                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Tài khoản" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Mật khẩu" />
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <a className="btn btn-primary mr-auto" href='/login'>Đăng nhập</a>
                                    <a className="text-success" href='/register'>
                                        Đăng ký
                                        <i class='fas fa-arrow-circle-right mx-2'></i>
                                    </a>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
