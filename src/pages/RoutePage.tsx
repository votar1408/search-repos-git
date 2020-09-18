import React, {FC} from 'react';

import {
    Redirect,
    Route,
    Switch
} from 'react-router-dom';

import {navigation} from '../consts';
import PageHome from './PageHome';

export const RoutePage: FC = () => {
    return (
        <Switch>
            <Route path={navigation.home} component={PageHome} exact />
            <Redirect to={navigation.home} />
        </Switch>
    );
};
