import React from 'react';

import {
    shallow,
    ShallowWrapper
} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

import {Spinner} from '../Spinner';

describe('Spinner', () => {
    const wrapper: ShallowWrapper = shallow(<Spinner />);

    it('should render correctly', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('renders without crashing', () => {
        expect(wrapper).toBeTruthy();
    });

    it('should contains <img/>', () => {
        expect(wrapper.find('img').length).toEqual(1);
    });

    it('should img contains src', () => {
        expect(wrapper.find('img').prop('src')).toEqual('spinner.svg');
    });
});
