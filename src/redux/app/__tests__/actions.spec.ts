import {RepositoryServerInfo} from '../../../interfaces/ServerData';
import {
    changePageAction,
    clearRepositoriesAction,
    getRepositoriesAction,
    loadingAction
} from '../actions';
import {
    AppAction,
    CHANGE_PAGE,
    ChangePageAction,
    CLEAR_REPOSITORIES,
    ClearRepositoriesAction,
    GET_REPOSITORIES,
    GetRepositoriesAction,
    LOADING
} from '../types';

describe('app action creators', () => {
    it('loadingAction(): should create an action to set loading', () => {
        const expectedAction: AppAction = {
            type: LOADING,
            payload: true
        };

        expect(loadingAction(true)).toEqual(expectedAction);
    });

    it('clearRepositoriesAction(): should create an action to clear of the repositories', () => {
        const expectedAction: ClearRepositoriesAction = {
            type: CLEAR_REPOSITORIES
        };

        expect(clearRepositoriesAction()).toEqual(expectedAction);
    });

    it('getRepositoriesAction(): should create an action to get repositories info', () => {
        const infoState: RepositoryServerInfo[] = [
            {
                id: 1,
                name: 'test1',
                description: 'some description 1',
                owner: {
                    login: 'login1',
                    avatar_url: 'some url1'
                }
            },
            {
                id: 2,
                name: 'test2',
                description: 'some description 2',
                owner: {
                    login: 'login2',
                    avatar_url: 'some url2'
                }
            }
        ];
        const expectedAction: GetRepositoriesAction = {
            type: GET_REPOSITORIES,
            payload: infoState
        };

        expect(getRepositoriesAction(infoState)).toEqual(expectedAction);
    });

    it('changePageAction(): should create an action to change active page', () => {
        const expectedAction: ChangePageAction = {
            type: CHANGE_PAGE,
            payload: 2
        };

        expect(changePageAction(2)).toEqual(expectedAction);
    });
});
