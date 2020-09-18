import './spinner.scss';

import React, {FC} from 'react';

import spinner from '../../assets/svg/spinner.svg';

export const Spinner: FC = () => {
    return (
        <div className="root">
            <div className="root__spinner">
                <img className="spinner-img" src={spinner} alt="spinner" />
            </div>
        </div>
    );
};
