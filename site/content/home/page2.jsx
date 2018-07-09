import React, { Component } from 'react';
import Ball1 from '../../statics/ball-1.png'
import Ball2 from '../../statics/ball-2.png'
import Ball3 from '../../statics/ball-3.png'

class Page2 extends Component {
    render() {
        return (
            <div id="page-2" className="page-container">
                <div className="page-section-content">
                    <div className="page-section-title">Solution</div>
                    <ul className="ball-list">
                        <li className="ball-item">
                            <div className="ball-img">
                                <img src={Ball1} alt="" />
                            </div>
                            <div className="ball-text">设计观</div>
                        </li>
                        <li className="ball-item">
                            <div className="ball-img">
                                <img src={Ball2} alt="" />
                            </div>
                            <div className="ball-text">特点</div>
                        </li>
                        <li className="ball-item">
                            <div className="ball-img">
                                <img src={Ball3} alt="" />
                            </div>
                            <div className="ball-text">自定义</div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Page2;