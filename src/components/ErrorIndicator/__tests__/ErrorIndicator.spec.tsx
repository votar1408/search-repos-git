import React from 'react';

import {
    shallow,
    ShallowWrapper
} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

import {ErrorIndicator} from '../ErrorIndicator';

describe('ErrorIndicator', () => {
    const wrapper: ShallowWrapper = shallow(<ErrorIndicator />);

    it('should render correctly', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('renders without crashing', () => {
        expect(wrapper).toBeTruthy();
    });

    it('should contains 3 <span/>', () => {
        expect(wrapper.find('span').length).toEqual(3);
    });
});
