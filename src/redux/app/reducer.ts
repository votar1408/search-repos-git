import {RepositoryServerInfo} from '../../interfaces/ServerData';
import {
    AppAction,
    AppLoadingAction,
    AppState,
    GET_REPOSITORIES,
    GetRepositoriesAction,
    LOADING
} from './types';

const initialState: AppState = {
    loading: false,
    repositories: []
};

export const appReducer = (state: AppState = initialState, action: AppAction): AppState => {
    switch (action.type) {
        case LOADING:
            return {...state, loading: (action as AppLoadingAction).payload} as AppState;
        case GET_REPOSITORIES: {
            const copyRepositories: RepositoryServerInfo[][] = [...state.repositories];
            copyRepositories[1] = (action as GetRepositoriesAction).payload;

            return {
                ...state,
                repositories: copyRepositories
            } as AppState;
        }
        default:
            return state;
    }
};
