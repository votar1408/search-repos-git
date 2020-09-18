import React from 'react';

import {
    mount,
    ReactWrapper,
    ShallowWrapper
} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import createMockStore, {
    MockStoreCreator,
    MockStoreEnhanced
} from 'redux-mock-store';

import {RootAppState} from '../../../redux/types';
import {RepositoriesList} from '../RepositoriesList';

describe('RepositoriesList', () => {
    const initialState: RootAppState = {
        app: {
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
            page: 1,
            searchValue: ''
        }
    };

    const mockStore: MockStoreCreator = createMockStore();

    let store: MockStoreEnhanced;
    let wrapper:
        | ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>
        | ShallowWrapper<{}, {}, React.Component<{}, {}, any>>;

    const getWrapper = (state: RootAppState) => {
        store = mockStore(state);
        return mount(
            <Router>
                <Provider store={store}>
                    <RepositoriesList />
                </Provider>
            </Router>
        );
    };

    beforeEach(() => {
        wrapper = getWrapper(initialState);
    });

    it('should render correctly', () => {
        expect(shallowToJson(wrapper as ShallowWrapper)).toMatchSnapshot();
    });

    it('renders without crashing', () => {
        expect(wrapper.find(RepositoriesList).length).toEqual(1);
    });

    it('should have 1 list element', () => {
        expect(wrapper.find('ul').length).toEqual(1);
    });

    it('should have 2 li element', () => {
        expect(wrapper.find('li').length).toEqual(2);
    });
});
