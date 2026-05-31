import { useCallback, useState } from "react";
import { createEmployee } from "../../appwrite/auth_service";
import { createUser } from "../../appwrite/db_service";

const useCreateEmployeeForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = useCallback(
        async (e) => {
            e.preventDefault();
            try {
                const user = await createEmployee(name, email, password);
                await createUser(name, email, user.$id);
                alert("Employee Added Successfully!");
                setName("");
                setEmail("");
                setPassword("");
            } catch {
                console.log("Error", Error);
            }
        },
        [email, name, password],
    );

    return {
        name,
        email,
        password,
        setName,
        setEmail,
        setPassword,
        handleSubmit,
    };
};

export default useCreateEmployeeForm;
