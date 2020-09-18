import React from 'react';

import {
    shallow,
    ShallowWrapper
} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

import {Repository} from '../Repository';

describe('Repository', () => {
    const repositoryData = {
        id: 1,
        name: 'some name',
        description: 'some description',
        owner: {login: 'some id', avatar_url: 'some url'}
    };
    const wrapper: ShallowWrapper = shallow(<Repository item={repositoryData} />);

    it('should render correctly', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('renders without crashing', () => {
        expect(wrapper).toBeTruthy();
    });

    it('should contains 3 <span/>', () => {
        expect(wrapper.find('div[data-id="repository-block"]').length).toEqual(3);
    });
});
