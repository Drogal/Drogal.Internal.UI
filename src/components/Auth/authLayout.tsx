import { useEffect, useState, type ReactNode } from "react";
import { authUtils } from "./authUtils";

type AuthStatus = "checking" | "valid" | "invalid";
export interface AuthLayoutArgs {
    appName: string;
    children: ReactNode;
    fallback?: React.ReactNode; // loader customizável
}

const AuthLayout = ({ appName, children, fallback }: AuthLayoutArgs) => {
    const [status, setStatus] = useState<AuthStatus>("checking");
    const { prepareToken, isTokenValid, logout } = authUtils();

    useEffect(() => {

        prepareToken();

        if (isTokenValid()) {
            setStatus("valid");
        } else {
            setStatus("invalid");
            logout(appName);
        }

    }, [])

    if (status === "checking") {
        return fallback ?? null; // ou um <Spinner /> padrão
    }

    if (status === "invalid") {
        return null; // já está redirecionando
    }

    return <>{children}</>;

}

export { AuthLayout };

