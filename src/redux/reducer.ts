import {combineReducers} from 'redux';

import {appReducer} from './app/reducer';

export const reducer = combineReducers({
    app: appReducer
});
