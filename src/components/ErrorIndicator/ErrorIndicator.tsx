import './errorIndicator.scss';

import React, {FC} from 'react';

import {texts} from '../../consts';

export const ErrorIndicator: FC = () => {
    const {errorIndicator1, errorIndicator2, errorIndicator3} = texts;

    return (
        <div className="error-indicator">
            <span>{errorIndicator1}</span>
            <span>{errorIndicator2}</span>
            <span>{errorIndicator3}</span>
        </div>
    );
};
