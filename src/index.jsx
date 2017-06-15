import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/app/App.jsx';

import './index.scss';

function renderApp(){
    ReactDOM.render(
        <AppContainer>
            <App />
        </AppContainer>,
        document.getElementById('main')
    );
}

renderApp();

if (module.hot) {  
    module.hot.accept('./components/app/App.jsx', renderApp);
}