import React, {FC} from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import {App} from './components/App';
import {ErrorBoundary} from './components/ErrorBoundary';
import {store} from './redux/store';

const WrappedApp: FC = () => {
    return (
        <Provider store={store}>
            <ErrorBoundary>
                <Router>
                    <App />
                </Router>
            </ErrorBoundary>
        </Provider>
    );
};

ReactDOM.render(<WrappedApp />, document.getElementById('root'));
