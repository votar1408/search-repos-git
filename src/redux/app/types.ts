import {RepositoryServerInfo} from '../../interfaces/ServerData';

export const LOADING: string = 'LOADING';
export const GET_REPOSITORIES: string = 'GET_REPOSITORIES';
export const CLEAR_REPOSITORIES: string = 'CLEAR_REPOSITORIES';
export const CHANGE_PAGE: string = 'CHANGE_PAGE';
export const CHANGE_SEARCH_VALUE: string = 'CHANGE_SEARCH_VALUE';

export interface AppLoadingAction {
    type: typeof LOADING;
    payload: boolean;
}

export interface GetRepositoriesAction {
    type: typeof GET_REPOSITORIES;
    payload: RepositoryServerInfo[];
}

export interface ClearRepositoriesAction {
    type: typeof CLEAR_REPOSITORIES;
}

export interface ChangePageAction {
    type: typeof CHANGE_PAGE;
    payload: number;
}

export interface ChangeSearchValueAction {
    type: typeof CHANGE_SEARCH_VALUE;
    payload: string;
}

export type AppAction =
    | AppLoadingAction
    | GetRepositoriesAction
    | ChangePageAction
    | ChangeSearchValueAction
    | ClearRepositoriesAction;

export interface AppState {
    loading: boolean;
    searchValue: string;
    page: number;
    repositories: RepositoryServerInfo[][];
}
