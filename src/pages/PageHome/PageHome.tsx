import React, {FC} from 'react';

import {Pagination} from '../../components/Pagination/Pagination';
import {RepositoriesList} from '../../components/RepositoriesList/RepositoriesList';
import {SearchRepositories} from '../../components/SearchRepositories/SearchRepositories';

export const PageHome: FC = () => {
    return (
        <>
            <SearchRepositories />
            <RepositoriesList />
            <Pagination />
        </>
    );
};
