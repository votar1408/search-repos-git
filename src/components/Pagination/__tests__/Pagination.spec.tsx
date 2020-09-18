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
import {Pagination} from '../Pagination';

describe('Pagination', () => {
    const getInitialState: any = (pageValue: number = 1): RootAppState => {
        return {
            app: {
                loading: false,
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
                page: pageValue,
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
                    <Pagination />
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
        expect(wrapper.find(Pagination).length).toEqual(1);
    });

    it('should have 2 buttons', () => {
        expect(wrapper.find('button').length).toEqual(2);
    });

    it('left button should be disabled on first page', () => {
        let leftButton = wrapper.find('button[data-id="left-button"]');
        let rightButton = wrapper.find('button[data-id="right-button"]');
        expect(leftButton.prop('disabled')).toEqual(true);
        expect(rightButton.prop('disabled')).toEqual(false);
    });

    it('should update disabled state after next click', () => {
        wrapper = getWrapper(getInitialState(2));

        let leftButton = wrapper.find('button[data-id="left-button"]');
        let rightButton = wrapper.find('button[data-id="right-button"]');
        expect(leftButton.prop('disabled')).toEqual(false);
        expect(rightButton.prop('disabled')).toEqual(false);

        rightButton.simulate('click');

        leftButton = wrapper.find('button[data-id="left-button"]');
        rightButton = wrapper.find('button[data-id="right-button"]');
        expect(leftButton.prop('disabled')).toEqual(false);
        expect(rightButton.prop('disabled')).toEqual(false);
    });
});
