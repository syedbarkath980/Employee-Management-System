import { useCallback, useEffect, useMemo, useState } from "react";
import { getCurrentUser } from "../../appwrite/auth_service";
import { getEmployeeTasks, updateTaskStatus } from "../../appwrite/db_service";

const useEmployeeTasks = () => {
    const [username, setUsername] = useState("");
    const [tasks, setTasks] = useState([]);

    const loadEmployeeTasks = useCallback(async () => {
        const user = await getCurrentUser();
        setUsername(user.name);
        const data = await getEmployeeTasks(user.$id);
        setTasks(data.documents);
    }, []);

    const markCompleted = useCallback(async (taskId) => {
        await updateTaskStatus(taskId, "completed");

        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.$id === taskId ? { ...task, status: "completed" } : task,
            ),
        );
    }, []);

    useEffect(() => {
        loadEmployeeTasks();
    }, [loadEmployeeTasks]);

    const counts = useMemo(() => {
        const pending = tasks.filter((task) => task.status === "pending").length;
        const completed = tasks.filter((task) => task.status === "completed").length;
        const total = tasks.length - completed;

        return { pending, completed, total };
    }, [tasks]);

    return {
        username,
        tasks,
        markCompleted,
        counts,
    };
};

export default useEmployeeTasks;
