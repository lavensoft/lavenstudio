import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import "./styles.scss";

class ChildNavigationBar extends Component {
    render() {
        return(
            <div className="child_header_bar">
                <div className="container">
                    <div className="left">
                        <span>LAVENES WEB DESIGN & DEVELOPMENT</span>
                    </div>
                    <div className="right">
                        <span>HOTLINE: +84 0938.415.997</span>
                        <div className="group">
                            <a>VIE</a>
                        </div>
                        <div className="group">
                            <a>ENG</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class NavigationBar extends Component {
    render() {
        return(
            <div className="header_bar">
                <div className="container">
                    <div className="left">
                        <h1>LAVENES</h1>
                    </div>
                    <div className="right">
                        <ul>
                            <li><Link to="#">GIỚI THIỆU</Link></li>
                            <li><Link to="#">DỊCH VỤ</Link></li>
                            <li><Link to="#">CỬA HÀNG</Link></li>
                            <li><Link to="#">GALLERIES</Link></li>
                            <li><Link to="#">BLOG</Link></li>
                            <li><Link to="#">LIÊN HỆ</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export {
    NavigationBar,
    ChildNavigationBar
}