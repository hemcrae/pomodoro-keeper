import { Route, useHistory } from "react-router";
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

export function PrivateRoute({ ...props }) {
    const history = useHistory()
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return null;
    }

    if (!isAuthenticated) {
        history.replace('/')
        return null;
    }

    return (
        <Route {...props} />
    );
}