import React, {Component} from 'react';

import PropTypes from 'prop-types';

import {ErrorIndicator} from '../ErrorIndicator';

export class ErrorBoundary extends Component {
    static propTypes = {
        children: PropTypes.element
    };

    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({hasError: true});
    }

    render() {
        const {hasError} = this.state;
        const {children} = this.props;

        if (hasError) {
            return <ErrorIndicator />;
        }

        return children;
    }
}
