import './src/styles/global.css'

import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import {GatsbyBrowser, navigate} from 'gatsby';

const onRedirectCallback = (appState) => {
    // Use Gatsby's navigate method to replace the url
    navigate(appState?.returnTo || '/', { replace: true });
};

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({ element }) => {
    let redirectUri = window.location.origin;
    if (window.location.pathname.length > 1) {
        redirectUri += window.location.pathname
    }
    return (
        <Auth0Provider
            domain={process.env.AUTH0_DOMAIN}
            clientId={process.env.AUTH0_CLIENTID}
            authorizationParams={{
                redirect_uri: redirectUri,
            }}
            onRedirectCallback={onRedirectCallback}
        >
            {element}
        </Auth0Provider>
    );
};