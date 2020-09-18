import {RepositoryServerInfo} from '../../interfaces/ServerData';
import {
    AppAction,
    CHANGE_PAGE,
    CHANGE_SEARCH_VALUE,
    CLEAR_REPOSITORIES,
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

export const clearRepositoriesAction = (): AppAction => {
    return {
        type: CLEAR_REPOSITORIES
    };
};

export const changePageAction = (value: number): AppAction => {
    return {
        type: CHANGE_PAGE,
        payload: value
    };
};

export const changeSearchValueAction = (value: string): AppAction => {
    return {
        type: CHANGE_SEARCH_VALUE,
        payload: value
    };
};
