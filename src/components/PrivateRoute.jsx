import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ element: Element, ...rest }) => {
    const { isAdmin } = useAuth();

    return (
        <Route
            {...rest}
            element={isAdmin() ? <Element /> : <Navigate to="/" replace />}
        />
    );
};

export default PrivateRoute;
