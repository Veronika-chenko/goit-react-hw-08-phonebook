import { useAuth } from "hooks/useAuth";
import { Navigate } from 'react-router-dom';

// дождаться, чтобы закончился Refresh;
// если не Refresh and isLogged=false -> throw out from here
export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isLoggedIn, isRefreshing } = useAuth();
    const shouldRedirect = !isRefreshing && !isLoggedIn;
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

// #1
// -<Component /> -> +Component