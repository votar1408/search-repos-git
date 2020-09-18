import './repositoriesList.scss';

import React, {
    FC,
    ReactElement,
    useMemo
} from 'react';

import {useSelector} from 'react-redux';

import {RepositoryServerInfo} from '../../interfaces/ServerData';
import {selectApp} from '../../redux/types';
import {Repository} from './Repository';

export const RepositoriesList: FC = () => {
    const {repositories} = useSelector(selectApp);
    const listForPage: RepositoryServerInfo[] = repositories[1];

    const listItems: ReactElement | null = useMemo(() => {
        return listForPage?.length > 0 ? (
            <ul className="repositories-container">
                {listForPage.map((item: RepositoryServerInfo) => {
                    return <Repository key={item.id} item={item} />;
                })}
            </ul>
        ) : null;
    }, [listForPage]);

    return <>{listItems}</>;
};
