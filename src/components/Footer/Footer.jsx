import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import "./styles.scss";

class Footer extends Component {
    render() {
        return(
            <footer>
                <section className="footer-top">
                    <span>FOLLOW US ON:</span>
                </section>
                <section className="footer-middle">
                    <div className="column">
                        <span className="title"><b>Giới Thiệu</b></span>
                        <Link className="link">Công ty</Link>
                        <Link className="link">Trần Quang Nhật</Link>
                        <Link className="link">Phong cách thiết kế</Link>
                        <Link className="link">BLOG</Link>
                    </div>
                    <div className="column">
                        <span className="title"><b>Dịch Vụ</b></span>
                        <Link className="link">Thiết kế Website</Link>
                        <Link className="link">Thiết kế Giao diện người dùng</Link>
                        <Link className="link">Lập trình Website</Link>
                        <Link className="link">Lập trình Phần mềm</Link>
                        <Link className="link">Lập trình Ứng dụng di động</Link>
                    </div>
                    <div className="column">
                        <span className="title"><b>Cửa Hàng</b></span>
                        <Link className="link">Nhats Devil Glasses & Accessories</Link>
                        <span className="title"><b>Liên Hệ</b></span>
                        <Link className="link">Address: 128/7 Nguyen Thai Hoc Street, Cau Ong Lanh Ward, District 1, Ho Chi Minh City </Link>
                        <Link className="link">HOTLINE: 0932.894.650</Link>
                    </div>
                    <div className="column">
                        <span className="title"><b>GALLERIES</b></span>
                        <Link className="link">Giao diện Website</Link>
                        <Link className="link">Giao diện Phần mềm</Link>
                        <Link className="link">Giao diện Ứng dụng di động</Link>
                    </div>
                </section>
                <section className="fotter-bottom">
                    <span className="copyright">Copyright © 2020 Laven Studio. All rights reserved.</span>
                    <div className="group">
                        <Link className="link">Chính sách riêng tư</Link>
                        <Link className="link">Điều khoản sử dụng</Link>
                        <Link className="link">Site Map</Link>
                    </div>
                    <span className="language">VN</span>
                </section>
            </footer>
        )
    }
}

export {
    Footer
}