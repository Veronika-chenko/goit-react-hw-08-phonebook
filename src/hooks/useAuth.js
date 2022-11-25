import { useSelector } from "react-redux";
import { selectUser, selectIsLoggedIn, selectIsRefreshing } from "redux/auth/selectors";

export const useAuth = () => {
    // 1.повертає значення 3 селекторів як 1 {}, зручно
    return {
        isLoggedIn: useSelector(selectIsLoggedIn),
        isRefreshing: useSelector(selectIsRefreshing),
        user: useSelector(selectUser),
    };
};
// 2. можна 1-м селектором

