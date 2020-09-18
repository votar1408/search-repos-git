import {common} from '../../consts';
import {RepositoryServerInfo} from '../../interfaces/ServerData';
import {
    AppAction,
    AppLoadingAction,
    AppState,
    CHANGE_PAGE,
    CHANGE_SEARCH_VALUE,
    ChangePageAction,
    ChangeSearchValueAction,
    CLEAR_REPOSITORIES,
    GET_REPOSITORIES,
    GetRepositoriesAction,
    LOADING
} from './types';

const initialState: AppState = {
    loading: false,
    page: common.getDefaultPage,
    repositories: [],
    searchValue: ''
};

export const appReducer = (state: AppState = initialState, action: AppAction): AppState => {
    switch (action.type) {
        case LOADING:
            return {...state, loading: (action as AppLoadingAction).payload} as AppState;
        case GET_REPOSITORIES: {
            const copyRepositories: RepositoryServerInfo[][] = [...state.repositories];
            copyRepositories[state.page] = (action as GetRepositoriesAction).payload;

            return {
                ...state,
                repositories: copyRepositories
            } as AppState;
        }
        case CLEAR_REPOSITORIES:
            return {
                ...state,
                repositories: [],
                page: common.getDefaultPage
            } as AppState;

        case CHANGE_PAGE: {
            const page: number = Math.max(common.getDefaultPage, state.page + (action as ChangePageAction).payload);
            return {
                ...state,
                page
            } as AppState;
        }
        case CHANGE_SEARCH_VALUE:
            return {
                ...state,
                searchValue: (action as ChangeSearchValueAction).payload,
                page: common.getDefaultPage
            } as AppState;

        default:
            return state;
    }
};
