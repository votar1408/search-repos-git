import {RepositoryServerInfo} from '../../interfaces/ServerData';

export const LOADING: string = 'LOADING';
export const GET_REPOSITORIES: string = 'GET_REPOSITORIES';

export interface AppLoadingAction {
    type: typeof LOADING;
    payload: boolean;
}

export interface GetRepositoriesAction {
    type: typeof GET_REPOSITORIES;
    payload: RepositoryServerInfo[];
}

export type AppAction = AppLoadingAction | GetRepositoriesAction;

export interface AppState {
    loading: boolean;
    repositories: RepositoryServerInfo[][];
}
