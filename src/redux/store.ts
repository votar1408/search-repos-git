/* eslint-disable no-underscore-dangle */
import {
    applyMiddleware,
    compose,
    createStore,
    Middleware
} from 'redux';
import thunk from 'redux-thunk';

import {reducer} from './reducer';

const middleware: [Middleware] = [thunk];

export const store = createStore(reducer, compose(applyMiddleware(...middleware)));
