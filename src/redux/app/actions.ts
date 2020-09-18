import {RepositoryServerInfo} from '../../interfaces/ServerData';
import {
    AppAction,
    GET_REPOSITORIES,
    LOADING
} from './types';

export const loadingAction = (value: boolean): AppAction => {
    return {
        type: LOADING,
        payload: value
    };
};

export const getRepositoriesAction = (value: RepositoryServerInfo[]): AppAction => {
    return {
        type: GET_REPOSITORIES,
        payload: value
    };
};
