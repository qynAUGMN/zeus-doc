import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'

import Footer from '../common/footer'
import Logo from '../common/logo'
import routeConfig from './router'
let routes = []
function getRoutesFrom(configs) {
    configs.forEach(config => {
        if (config.options) {
            getRoutesFrom(config.options)
        } else {
            routes.push(config)
        }
    })
}

function mapRoutes(configs) {
    return configs.map((config, index) => {
        if (config.options) {
            return <li key={index} className="nav-menu">
                <div className="option-tag">{config.name}</div>
                <ul>
                    {mapRoutes(config.options)}
                </ul>
            </li>
        }
        else {
            return <li key={index} className="nav-menu">
                <NavLink to={config.route}>{config.name}</NavLink>
            </li>
        }
    })
}
const menus = mapRoutes(routeConfig)
getRoutesFrom(routeConfig)

export default class Layout extends Component {
    state = {
        doc: ''
    }
    render() {
        return (
            <React.Fragment>
                <div className="main doc-main">
                    <div className="main-sidebar">
                        <Logo />
                        <ul className="nav">
                            {menus}
                        </ul>
                    </div>
                    <div className="main-content">
                        <div className="doc-container">
                            {routes.map(route => <Route key={route.route} component={route.component} path={route.route} />)}
                        </div>
                        <Footer />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
