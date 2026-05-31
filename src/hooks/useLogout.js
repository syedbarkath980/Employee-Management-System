import { useCallback } from "react";
import { logout } from "../../appwrite/auth_service";

const useLogout = ({ onLogoutSuccess }) =>
    useCallback(async () => {
        try {
            await logout();
            onLogoutSuccess();
        } catch {
            alert("Cant logout");
        }
    }, [onLogoutSuccess]);

export default useLogout;
