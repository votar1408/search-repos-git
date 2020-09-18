import React from 'react';

import {
    shallow,
    ShallowWrapper
} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

import {Pagination} from '../../../components/Pagination';
import {RepositoriesList} from '../../../components/RepositoriesList';
import {SearchRepositories} from '../../../components/SearchRepositories';
import {PageHome} from '../PageHome';

describe('PageHome', () => {
    it('should render correctly', () => {
        const output = shallow(<PageHome />);
        expect(shallowToJson(output)).toMatchSnapshot();
    });

    it('renders without crashing', () => {
        expect(shallow(<PageHome />));
    });

    it('should contains of <SearchRepositories/>', () => {
        const wrapper: ShallowWrapper = shallow(<PageHome />);
        expect(wrapper.find(SearchRepositories)).toHaveLength(1);
    });

    it('should contains of <RepositoriesList/>', () => {
        const wrapper: ShallowWrapper = shallow(<PageHome />);
        expect(wrapper.find(RepositoriesList)).toHaveLength(1);
    });

    it('should contains of <Pagination/>', () => {
        const wrapper: ShallowWrapper = shallow(<PageHome />);
        expect(wrapper.find(Pagination)).toHaveLength(1);
    });
});
