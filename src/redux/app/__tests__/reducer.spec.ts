import {getDefaultPage} from '../../../consts/common';
import {RepositoryServerInfo} from '../../../interfaces/ServerData';
import {appReducer} from '../reducer';
import {
    AppAction,
    AppState,
    CHANGE_PAGE,
    CHANGE_SEARCH_VALUE,
    ChangePageAction,
    ChangeSearchValueAction,
    CLEAR_REPOSITORIES,
    ClearRepositoriesAction,
    GET_REPOSITORIES,
    GetRepositoriesAction,
    LOADING
} from '../types';

describe('app reducer', () => {
    it('LOADING', () => {
        const initialState: AppState = {
            loading: false,
            repositories: [],
            searchValue: '',
            page: 1
        };
        const action: AppAction = {
            type: LOADING,
            payload: true
        };

        expect(appReducer(initialState, action)).toEqual({
            ...initialState,
            loading: true
        });
    });

    it('CLEAR_REPOSITORIES', () => {
        const initialState: AppState = {
            loading: false,
            repositories: [
                [
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
                ]
            ],
            searchValue: '',
            page: 1
        };

        const action: ClearRepositoriesAction = {
            type: CLEAR_REPOSITORIES
        };

        expect(appReducer(initialState, action)).toEqual({
            ...initialState,
            repositories: []
        });
    });

    it('CLEAR_REPOSITORIES: reset current page to default value', () => {
        const initialState: AppState = {
            loading: false,
            repositories: [],
            searchValue: '',
            page: 4
        };

        const action: ClearRepositoriesAction = {
            type: CLEAR_REPOSITORIES
        };

        expect(appReducer(initialState, action)).toEqual({
            ...initialState,
            page: getDefaultPage
        });
    });

    it('GET_REPOSITORIES', () => {
        const initialState: AppState = {
            loading: false,
            repositories: [],
            searchValue: '',
            page: 1
        };

        const data: RepositoryServerInfo[] = [
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
        const repositories: RepositoryServerInfo[][] = [undefined, data];
        const action: GetRepositoriesAction = {
            type: GET_REPOSITORIES,
            payload: data
        };

        expect(appReducer(initialState, action)).toEqual({
            ...initialState,
            repositories
        });
    });

    it('CHANGE_PAGE: increase value', () => {
        const initialState: AppState = {
            loading: false,
            repositories: [],
            searchValue: '',
            page: 1
        };

        const action: ChangePageAction = {
            type: CHANGE_PAGE,
            payload: 1
        };

        expect(appReducer(initialState, action)).toEqual({
            ...initialState,
            page: 2
        });
    });

    it('CHANGE_PAGE: decrease value', () => {
        const initialState: AppState = {
            loading: false,
            repositories: [],
            searchValue: '',
            page: 3
        };

        const action: ChangePageAction = {
            type: CHANGE_PAGE,
            payload: -1
        };

        expect(appReducer(initialState, action)).toEqual({
            ...initialState,
            page: 2
        });
    });

    it('CHANGE_SEARCH_VALUE', () => {
        const initialState: AppState = {
            loading: false,
            repositories: [],
            searchValue: 'some value',
            page: 1
        };

        const action: ChangeSearchValueAction = {
            type: CHANGE_SEARCH_VALUE,
            payload: 'new value'
        };

        expect(appReducer(initialState, action)).toEqual({
            ...initialState,
            searchValue: 'new value'
        });
    });
});
