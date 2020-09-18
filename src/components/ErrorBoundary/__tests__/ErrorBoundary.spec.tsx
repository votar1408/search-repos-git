import React from 'react';

import {
    shallow,
    ShallowWrapper
} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

import {ErrorIndicator} from '../../ErrorIndicator';
import {ErrorBoundary} from '../ErrorBoundary';

describe('ErrorIndicator', () => {
    const wrapper: ShallowWrapper = shallow(<ErrorBoundary />);

    it('should render correctly', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('renders without crashing', () => {
        expect(wrapper).toBeTruthy();
    });

    it('should contains <ErrorIndicator/> if has error', () => {
        wrapper.setState({hasError: true});
        expect(wrapper.find(ErrorIndicator).length).toEqual(1);
    });

    it('should contains children if hasn`t error', () => {
        const children = <span>Hello</span>;
        let wrapper: ShallowWrapper = shallow(<ErrorBoundary children={children} />);

        expect(wrapper.find(ErrorIndicator)).toBeDefined();
        expect(wrapper.find('span').length).toEqual(1);
    });
});
