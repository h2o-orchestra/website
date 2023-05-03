import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginLink() {
    const {
        isAuthenticated,
        loginWithRedirect,
    } = useAuth0();

    if (isAuthenticated) {
        return (<a href="#" className="px-6 flex-1 text-center" onClick={loginWithRedirect}>Membres</a>);
    }
    else {
        return (<a>Logout</a>);
    }
};

export default LoginLink;