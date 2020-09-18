import {
    AppAction,
    AppLoadingAction,
    AppState,
    LOADING
} from './types';

const initialState: AppState = {
    loading: false
};

export const appReducer = (state: AppState = initialState, action: AppAction): AppState => {
    switch (action.type) {
        case LOADING:
            return {...state, loading: (action as AppLoadingAction).payload} as AppState;
        default:
            return state;
    }
};
