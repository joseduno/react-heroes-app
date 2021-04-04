import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types';

/* Meconfunde un poco el use de ...rest y props */

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    localStorage.setItem('lastPath', rest.location.pathname)

    return (
        /* Al utilizar un router secundario, no utilizar la propiedad 'exact' */
        <Route {...rest}
            component={props => (
                (isAuthenticated)
                ? <Component {...props} />
                : <Redirect to='/login' />
            )}
        />
    )
}


PrivateRoute.protoTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}