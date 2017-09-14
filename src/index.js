import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import './index.css'
import Auth from './components/Auth/indeks'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <Provider store={store}>
        <Auth>
            <App/>
        </Auth>
    </Provider>,
    document.getElementById('root'))
registerServiceWorker()
