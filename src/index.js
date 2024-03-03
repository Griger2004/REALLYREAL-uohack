import React from 'react';
import './index.css';
import App from './App';  
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';

const root = createRoot(document.getElementById('root'))
root.render(
    <Auth0Provider
      domain="dev-g85kmweu3ahph8in.us.auth0.com"
      clientId="8lQ3pdjskjQzDrcCzNAYue6axvH4EuwY"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
);
