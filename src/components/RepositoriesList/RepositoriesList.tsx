import './repositoriesList.scss';

import React, {
    FC,
    ReactElement,
    useMemo
} from 'react';

import {useSelector} from 'react-redux';

import {texts} from '../../consts/texts';
import {RepositoryServerInfo} from '../../interfaces/ServerData';
import {selectApp} from '../../redux/types';
import {Repository} from './Repository';

export const RepositoriesList: FC = () => {
    const {repositories, page, loading} = useSelector(selectApp);
    const listForPage: RepositoryServerInfo[] = !repositories[page] ? repositories[page - 1] : repositories[page];

    const listItems: ReactElement | null = useMemo(() => {
        return listForPage?.length > 0 ? (
            <ul className="repositories-container">
                {listForPage.map((item: RepositoryServerInfo) => {
                    return <Repository key={item.id} item={item} />;
                })}
            </ul>
        ) : loading ? null : (
            <div className="empty-repositories">{texts.emptyList}</div>
        );
    }, [listForPage, loading]);

    return <>{listItems}</>;
};
