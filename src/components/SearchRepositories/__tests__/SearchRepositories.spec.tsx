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
import {SearchRepositories} from '../SearchRepositories';

describe('SearchRepositories', () => {
    const initialState: RootAppState = {
        app: {
            loading: false,
            repositories: [],
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
                    <SearchRepositories />
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
        expect(wrapper.find(SearchRepositories).length).toEqual(1);
    });

    it('should have 1 input element', () => {
        expect(wrapper.find('input').length).toEqual(1);
    });

    it('should update value for field after some input', () => {
        let searchInput = wrapper.find('input[name="search-repo-input"]');
        expect(searchInput.prop('value')).toEqual('');

        const expectValue = {
            target: {
                name: 'search-repo-input',
                value: 'new some value'
            }
        };
        searchInput.simulate('change', expectValue);

        searchInput = wrapper.find('input[name="search-repo-input"]');
        expect(searchInput.prop('value')).toEqual(expectValue.target.value);
    });

    it('should update value for field after some input', () => {
        let searchInput = wrapper.find('input[name="search-repo-input"]');
        expect(searchInput.prop('value')).toEqual('');

        const expectValue = {
            target: {
                name: 'search-repo-input',
                value: 'new some value'
            }
        };
        searchInput.simulate('change', expectValue);

        searchInput = wrapper.find('input[name="search-repo-input"]');
        expect(searchInput.prop('value')).toEqual(expectValue.target.value);
    });

    it('should enabled submit button', () => {
        const submitButton = wrapper.find('button[name="submit-button"]');

        submitButton.simulate('click');

        expect(submitButton.prop('disabled')).toBeFalsy();
    });
});
