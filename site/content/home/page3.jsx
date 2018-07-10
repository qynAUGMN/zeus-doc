import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import equalSvg from '../../statics/equal.svg'
import reactSvg from '../../statics/react.svg'
import logoSvg from '../../statics/logo.svg'
import plusSvg from '../../statics/plus.svg'
import bitmapSvg from '../../statics/bitmap.svg'

class Page3 extends Component {
    render() {
        return (
            <div id="page-3" className="page-container">
                <div className="page-section-content">
                    <div className="page-section-title">A design system made for React.js</div>
                    <div className="tech-statement">
                        <img src={reactSvg} alt="" />
                        <img className="sign" src={plusSvg} alt="" />
                        <img src={bitmapSvg} alt="" />
                        <img className="sign" src={equalSvg} alt="" />
                        <img src={logoSvg} alt="" />
                    </div>

                    <p className="tech-description">Zeus Design 提供了将概念从概念应用到实际应用所需的所有指导，组件和设计资源。我们使用React和Sketch来帮助您完成旅程。</p>

                    <Link to="/docs/articles/get-started" className="btn-large">
                        详细说明
                    </Link>
                </div>
            </div>
        );
    }
}

export default Page3;