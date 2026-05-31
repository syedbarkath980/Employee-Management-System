import { useState } from "react";
import { getCurrentUser, login } from "../../appwrite/auth_service";

const useLogin = ({ onLoginSuccess, setUserType }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const toggleVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            const userData = getCurrentUser();
            const usertype = await userData;
            setUserType(usertype.name);
            onLoginSuccess();
        } catch (error) {
            console.error("Login flow failed:", error);

            const isInvalidCredentials =
                error?.code === 401 || error?.type === "user_invalid_credentials";

            alert(
                isInvalidCredentials
                    ? "Invalid Credentials!"
                    : error?.message || "Login failed. Please try again.",
            );
        }
    };

    return {
        email,
        password,
        showPassword,
        setEmail,
        setPassword,
        toggleVisibility,
        handleFormSubmit,
    };
};

export default useLogin;
