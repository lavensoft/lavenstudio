import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Landing extends Component {
    render() {
        return(
            <div className="landing">
                <div className="page">
                    <div className="left">
                        <div className="groups">
                            <span className="top">WELCOME TO</span>
                            <h1 className="middle">LAVENES</h1>
                            <span className="bottom">WEB DESIGN & DEVELOPMENT</span>
                        </div>
                    </div>
                    <div className="right">

                    </div>
                </div>
            </div>
        )
    }
}

export {
    Landing
}