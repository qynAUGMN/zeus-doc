import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'zeus'

import MainRouter from './router'
import './styles/index.less'

class App extends Component {
	render() {
		return (
			<Provider>
				<HashRouter >
					<MainRouter />
				</HashRouter>
			</Provider>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'))
