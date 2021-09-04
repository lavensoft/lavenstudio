import React, {Component} from 'react';
import {Landing} from '../components/Home/Landing';
import {Services} from '../components/Home/Services';
import {EndSection, PortfolioSection,FirstIntroSection, SecondIntroSection, ThirdIntroSection, FourthIntroSection,FifthIntroSection} from '../components/Home/Introduction';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
       return(
           <div style={{display: "flex", alignItems:"center", flexDirection: "column"}}>

               <Landing/>

               <FirstIntroSection/>
               <SecondIntroSection/>
               <ThirdIntroSection/>
               <FourthIntroSection/>
               <h1 className="title">Control Panel Thân Thiện Với Người Dùng</h1>
               <FifthIntroSection/>
               <h1 className="title">DỊCH VỤ CỦA CHÚNG TÔI</h1>
               <Services/>
               <h1 className="title">CÁC DỰ ÁN LAVENES ĐÃ THỰC HIỆN</h1>
               <Link to="/" className="title_link">Xem tất cả</Link>
               <PortfolioSection/>
               <EndSection/>
           </div>
       )
    }
}

export default Home;