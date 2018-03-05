import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './components/App';

function renderApp(Component) {
    const browserHistory = createBrowserHistory();

    render(
        <Router history={browserHistory}>
            <Component/>
        </Router>,
        document.getElementById('root')
    );
}

renderApp(App);
