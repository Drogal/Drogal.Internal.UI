import { useEffect, type ReactNode } from "react";
import { authUtils } from "./authUtils";

export interface AuthLayoutArgs {
    appName: string
    children: ReactNode
}

const AuthLayout = ({ appName, children }: AuthLayoutArgs) => {

    const { prepareToken, isTokenValid, logout } = authUtils();

    useEffect(() => {

        prepareToken();

        if(!isTokenValid()){

            logout(appName);
            
            return;

        }

    }, [])

    return <>{children}</>;

}

export { AuthLayout };

