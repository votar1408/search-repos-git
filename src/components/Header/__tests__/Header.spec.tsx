import React from 'react';

import {
    shallow,
    ShallowWrapper
} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

import {Header} from '../Header';

describe('Header', () => {
    const wrapper: ShallowWrapper = shallow(<Header />);

    it('should render correctly', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('renders without crashing', () => {
        expect(wrapper).toBeTruthy();
    });

    it('should contains 1 <span/>', () => {
        expect(wrapper.find('span').length).toEqual(1);
    });
});
