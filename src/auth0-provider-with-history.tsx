import React, { ReactNode } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { customHistory } from "./history/history";
import { keys } from "./keys/keys";

interface IProps {
  children: ReactNode;
}

export const Auth0ProviderWithHistory = ({ children }: IProps) => {
  const onRedirectCallback = (appState: any) => {
    customHistory.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={keys.domain}
      clientId={keys.clientId}
      redirectUri="http://localhost:3000/user/tacklebox"
      onRedirectCallback={onRedirectCallback}
      audience={keys.audience}
    >
      {children}
    </Auth0Provider>
  );
};
