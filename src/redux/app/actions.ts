import {
    AppAction,
    LOADING
} from './types';

export const loadingAction = (value: boolean): AppAction => {
    return {
        type: LOADING,
        payload: value
    };
};
