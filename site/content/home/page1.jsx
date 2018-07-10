import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ZeusPng from '../../statics/zeus.png'
class Page1 extends Component {
    render() {
        return (
            <div id="page-1" className="page">
                <div className="page-section-content">

                    <Link className="btn-large btn-left" to="/docs/articles/get-started">
                        Start
                    </Link>

                    <div className="zeus-potrait">
                        <img src={ZeusPng} alt="" />
                    </div>
                    <Link to="/docs/components/icon" className="btn-large btn-right">
                        Learn
                    </Link>

                    <div className="content-footer">
                        <p>⚛️ React UI component library & design system, </p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;built with styled-components</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page1;