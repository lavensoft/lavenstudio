import React, {Component} from 'react';
import {BsPerson, BsGraphUp, BsUpload} from 'react-icons/bs';
import {IoMdFingerPrint, IoIosColorPalette} from 'react-icons/io';
import {Link} from 'react-router-dom';
import {SlideShow} from '../Slider/Slider';

class FirstIntroSection extends Component {
    render() {
        return(
            <div className="section first_intro">
                <div className="left">
                    <div className="group">
                        <div className="card intro center column horizontal">
                            <div className="icon_container purple">
                                <IoIosColorPalette className="icon"/>
                            </div>
                            <span className="purple">Laven Studio</span>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="group wrap">
                        <h2>Thiết kế mang đến cảm hứng cho bạn!</h2>
                        <p>Đối với Laven Studio, một thiết kế hoàn mỹ phải đẹp như một viên kim cương, hoàn hảo đến từng góc cạnh và đặc biệt là phải mang một giá trị nghệ thuật lẫn tinh thần cho người sử dụng. </p>
                    </div>
                </div>
            </div>
        )
    }
}

class SecondIntroSection extends Component {
    render() {
        return(
            <div className="section second_intro">
                <div className="left">
                    <div className="group wrap">
                        <h2>Công nghệ hiện đại</h2>
                        <p>Không chỉ dừng lại ở thiết kế! Laven Studio sẽ cung cấp cho bạn những công nghệ hiện đại giúp bạn thực hiện hóa được những ý tưởng của bạn.</p>
                    </div>
                </div>
                <div className="right">
                    <div className="group">
                        <div className="card intro center column horizontal">
                            <div className="icon_container orange">
                                <IoMdFingerPrint className="icon"/>
                            </div>
                            <span className="orange">Technology</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class ThirdIntroSection extends Component {
    render() {
        return(
            <div className="section first_intro">
                <div className="left">
                    <div className="group">
                        <div className="card intro center column horizontal">
                            <div className="icon_container purple">
                                <IoIosColorPalette className="icon"/>
                            </div>
                            <span className="purple">Laven Studio</span>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="group wrap">
                        <h2>Dễ dàng quản lý!</h2>
                        <p>Nếu bạn đang muốn một website có thể dễ dàng thay đổi nội dung mà không cần biết code thì Laven Studio chính là sự lựa chọn dành cho bạn! Chúng tôi sẽ cung cấp cho bạn một trang quản lý các nội dung với độ bảo mật cao và giao diện thân thiện cùng với nhiều tính năng giúp bạn dễ dàng trong việc quản lý và thay đổi trang web.</p>
                    </div>
                </div>
            </div>
        )
    }
}

class FourthIntroSection extends Component {
    render() {
        return(
            <div className="section second_intro">
                <div className="left">
                    <div className="group wrap">
                        <h2>Không lo lắng về bảo hành!</h2>
                        <p>Các trang web do Laven Studio làm ra sẽ được bảo hành từ 1 - 3 năm tùy theo giá trị của sản phẩm. Trong quá trình vận hành web, nếu có bất kỳ lỗi phát sinh, Laven sẽ xử lý trong 3 giờ làm việc và không phát sinh chi phí nào!</p>
                    </div>
                </div>
                <div className="right">
                    <div className="group">
                        <div className="card intro center column horizontal">
                            <div className="icon_container orange">
                                <IoMdFingerPrint className="icon"/>
                            </div>
                            <span className="orange">Bảo Hành</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class FifthIntroSection extends Component {
    render() {
        return(
            <div className="section fifth_intro">
                <div className="card fullsize center" style={{background: "url(/resources/img/ControlPanel.png) no-repeat left top / 130%"}}></div>
                <p>Với giao diện hiện đại và thân thiện với người dùng. Laven Manager chính là công cụ quản lý trang web đắc lực dành cho khách hàng của Laven Studio.</p>
            </div>
        )
    }

}

class PortfolioSection extends Component {
    render() {
        return(
            <div className="section portfolio">
                <SlideShow/>
            </div>
        )
    }
}

class EndSection extends Component {
    render() {
        return(
            <div className="section end">
                <div className="action_container center column">
                    <h1>Hãy tạo một cuộc cách mạng!</h1>
                    <Link className="button white o25" to="/">Liên hệ với chúng tôi</Link>
                </div>
            </div>
        )
    }
}

export {
    FirstIntroSection,
    SecondIntroSection,
    ThirdIntroSection,
    FourthIntroSection,
    FifthIntroSection,
    PortfolioSection,
    EndSection
}