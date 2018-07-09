import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LogoSvg from '../../statics/logo.svg'

class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <Link to="/">
                    <img src={LogoSvg} alt="" />
                </Link>
            </div>
        );
    }
}

export default Logo;