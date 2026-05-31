import { useCallback, useEffect, useState } from "react";
import { getAllEmployees, createTask } from "../../appwrite/db_service";

const useAssignTaskForm = ({ onTaskAssigned }) => {
    const [allEmployees, setAllEmployees] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [assignedto, setAssignedTo] = useState("");
    const [category, setCategory] = useState("");

    const fetchAllEmployees = useCallback(async () => {
        const data = await getAllEmployees();
        setAllEmployees(data.documents);
    }, []);

    const handleSubmit = useCallback(
        async (e) => {
            e.preventDefault();
            await createTask(title, description, assignedto, category);
            alert("Task assigned successfully!");
            setTitle("");
            setDescription("");
            setAssignedTo("");
            setCategory("");
            await onTaskAssigned();
        },
        [assignedto, category, description, onTaskAssigned, title],
    );

    useEffect(() => {
        fetchAllEmployees();
    }, [fetchAllEmployees]);

    return {
        allEmployees,
        title,
        description,
        assignedto,
        category,
        setTitle,
        setDescription,
        setAssignedTo,
        setCategory,
        handleSubmit,
    };
};

export default useAssignTaskForm;
