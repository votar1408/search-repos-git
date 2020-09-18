import React from 'react';

import {mount} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import createMockStore, {
    MockStoreCreator,
    MockStoreEnhanced
} from 'redux-mock-store';

import {RootAppState} from '../../../redux/types';
import {Spinner} from '../../Spinner';
import {App} from '../App';

describe('App', () => {
    const getInitialState = (value: boolean = false): RootAppState => {
        return {
            app: {
                loading: value,
                repositories: [
                    undefined,
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
                searchValue: 'test'
            }
        };
    };

    const mockStore: MockStoreCreator = createMockStore();

    let store: MockStoreEnhanced;
    let wrapper: any;

    const getWrapper = (state: RootAppState) => {
        store = mockStore(state);
        return mount(
            <Router>
                <Provider store={store}>
                    <App />
                </Provider>
            </Router>
        );
    };

    beforeEach(() => {
        wrapper = getWrapper(getInitialState());
    });

    it('should render correctly', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('renders without crashing', () => {
        expect(wrapper.find(App).length).toEqual(1);
    });

    it('should contains 1 <main/>', () => {
        expect(wrapper.find('main').length).toEqual(1);
    });

    it('not should contains <Spinner/> component if param loading equal false', () => {
        expect(wrapper.find(Spinner).length).toEqual(0);
    });

    it('should contains 1 <Spinner/> if param loading equal true', () => {
        wrapper = getWrapper(getInitialState(true));
        expect(wrapper.find(Spinner).length).toEqual(1);
    });
});
