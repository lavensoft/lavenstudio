import React, {Component} from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import MoHome0 from '../../resources/img/Projects/MoHome/0.png';
import LeedDoor0 from '../../resources/img/Projects/LeedDoor/0.png';
import SaveplusX20 from '../../resources/img/Projects/SaveplusX2/0.png';
import TheFuture0 from '../../resources/img/Projects/TheFuture/0.png';
import LavenConfession0 from '../../resources/img/Projects/LavenConfession/0.png';

import "./styles.scss";

class SlideShow extends Component {
    render() {
        const properties = {
          duration: 5000,
          autoplay: false,
          transitionDuration: 750,
          arrows: true,
          infinite: true,
          easing: "ease",
          indicators: (i) => <div className="indicator">{i + 1}</div>
        };

        return(
            <article className="slides_container">
                <Slide {...properties}>
                  <div className="each-slide">
                    <div style={{'backgroundImage': `url(${LeedDoor0})`}}>
                        <h1>Website công ty cửa Leed VN</h1>
                    </div>
                  </div>
                  <div className="each-slide">
                    <div style={{'backgroundImage': `url(${TheFuture0})`}}>
                        <h1>Website tạp chí bóng đá The Future</h1>
                    </div>
                  </div>
                  <div className="each-slide">
                    <div style={{'backgroundImage': `url(${LavenConfession0})`}}>
                        <h1>Hệ thống Website Lavenes Confession</h1>
                    </div>
                  </div>
                  <div className="each-slide">
                    <div style={{'backgroundImage': `url(${SaveplusX20})`}}>
                        <h1>Website getlink SaveplusX2</h1>
                    </div>
                  </div>
                  <div className="each-slide">
                    <div style={{'backgroundImage': `url(${MoHome0})`}}>
                        <h1>Hệ Thống Quản Lý Studio Mơ Home</h1>
                    </div>
                  </div>
                </Slide>
            </article>
        )
    }
}

export {
    SlideShow
}