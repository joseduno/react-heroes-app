import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types';

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    return (
        /* Al utilizar un router secundario, no utilizar la propiedad 'exact' */
        <Route {...rest}
            component={props => (
                (!isAuthenticated)
                ? <Component {...props} />
                : <Redirect to='/' />
            )}
        />
    )
}


PublicRoute.protoTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}