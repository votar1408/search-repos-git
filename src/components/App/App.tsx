import '../../assets/scss/main.scss';
import '../../assets/scss/nullstyle.scss';
import './app.scss';

import React, {
    FC,
    ReactElement
} from 'react';

import {useSelector} from 'react-redux';

import {RoutePage} from '../../pages/RoutePage';
import {selectApp} from '../../redux/types';
import {Header} from '../Header';
import {Spinner} from '../Spinner';

export const App: FC = () => {
    const {loading} = useSelector(selectApp);

    const spinner: ReactElement | null = loading ? <Spinner /> : null;

    return (
        <>
            <Header />
            <main className="main-container">
                <RoutePage />
                {spinner}
            </main>
        </>
    );
};
