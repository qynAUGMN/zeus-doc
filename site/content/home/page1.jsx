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
                        <p>这里有句简短的描述，可中文可英文，也可中英文对照</p>
                        <p>Focus on the essential experience</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page1;