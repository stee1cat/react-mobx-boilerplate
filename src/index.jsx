import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import createBrowserHistory from 'history/createBrowserHistory';

import './styles/app.scss';
import App from './components/App';
import stores from './stores';

function renderApp(Component) {
    const browserHistory = createBrowserHistory();

    render(
        <Router history={browserHistory}>
            <Provider store={stores}>
                <Component/>
            </Provider>
        </Router>,
        document.getElementById('root')
    );
}

renderApp(App);
