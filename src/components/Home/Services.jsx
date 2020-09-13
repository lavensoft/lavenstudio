import React, {Component} from 'react';
import {BsCodeSlash, BsHammer, BsLayersFill} from 'react-icons/bs';
import {Link} from 'react-router-dom';

class Services extends Component {
    render() {
        return (
            <div className="section services">
                <div className="card_group">
                    <div className="card intro center column horizontal">
                        <div className="icon_container pink">
                            <BsHammer className="icon"/>
                        </div>
                        <span>Lập trình & Phát triển Website</span>
                        <p>Hãy để chúng tôi tạo một cuộc cách mạng cho doanh nghiệp của bạn bằng một <b>Website thật ấn tượng và chuyên nghiệp!</b></p>
                        <Link to="/" className="button pink">Xem thêm</Link>
                    </div>
                    <div className="card intro center column horizontal">
                        <div className="icon_container pink">
                            <BsLayersFill className="icon"/>
                        </div>
                        <span>Thiết kế giao diện người dùng</span>
                        <p>Điều cốt lõi tạo nên một phần mềm thành công không chỉ dừng lại ở tính năng, mà còn nằm ở <b>Giao Diện và Trải Nghiệm Người Dùng!</b></p>
                        <Link to="/" className="button pink">Xem thêm</Link>
                    </div>
                    <div className="card intro center column horizontal">
                        <div className="icon_container pink">
                            <BsCodeSlash className="icon"/>
                        </div>
                        <span>Lập trình & Phát triển Website</span>
                        <p>Bạn có ý tưởng phần mềm nhưng bạn không biết viết code ? <b>Hãy để chúng tôi thực hiện ý tưởng ấy giúp bạn!</b></p>
                        <Link to="/" className="button pink">Xem thêm</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export {
    Services
}