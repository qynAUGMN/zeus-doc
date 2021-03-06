import React, { Component } from 'react';
import Logo from '../../statics/logo.svg'

class MainFooter extends Component {
    render() {
        return (
            <footer className="main-footer">
                <div className="footer-container">
                    <div className="footer-links">
                        <div className="logo">
                            <img src={Logo} alt="" />
                        </div>
                        <ul className="footer-links-group">
                            <li className="footer-links-item">About</li>
                            <li className="footer-links-item">Blog</li>
                            <li className="footer-links-item">Training</li>
                            <li className="footer-links-item">Podcast</li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">&copy; Made with Zcool front end group</div>
            </footer>
        );
    }
}

export default MainFooter;