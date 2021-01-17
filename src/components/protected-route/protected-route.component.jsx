import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, userAuthenticated, ...rest }) => {
    return (
        <Route {...rest} render={
            props => {
                if (userAuthenticated) {
                    return <Component {...props} />
                }else {
                    return <Redirect to={{
                        pathname: '/',
                        state: { from: props.location }
                    }} />
                }
            }
        } />
    )
}

export default ProtectedRoute;