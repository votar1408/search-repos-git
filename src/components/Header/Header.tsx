import './header.scss';

import React, {FC} from 'react';

import {texts} from '../../consts';

export const Header: FC = () => {
    return (
        <header className="header-root">
            <div>
                <span>{texts.appName}</span>
            </div>
        </header>
    );
};
