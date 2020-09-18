import './repository.scss';

import React, {FC} from 'react';

import {texts} from '../../../consts';
import {RepositoryServerInfo} from '../../../interfaces/ServerData';

interface RepositoryProps {
    item: RepositoryServerInfo;
}

export const Repository: FC<RepositoryProps> = ({
    item: {
        id,
        name,
        description,
        owner: {login, avatar_url}
    }
}: RepositoryProps) => {
    return (
        <li className="repository">
            <div className="repository__block" data-id="repository-block">
                <span className="repository__block_title">{texts.name}</span>
                <span className="repository__block_description">{name}</span>
            </div>
            <div className="repository__block" data-id="repository-block">
                <span className="repository__block_title">{texts.description}</span>
                <span className="repository__block_description">{description}</span>
            </div>
            <div className="repository__block" data-id="repository-block">
                <span className="repository__block_title">{texts.owner}</span>
                {avatar_url ? <img className="repository__block_logo" src={avatar_url} alt="logo" /> : null}
                <span className="repository__block_description">{login}</span>
            </div>
        </li>
    );
};
