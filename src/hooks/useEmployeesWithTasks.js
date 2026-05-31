import { useCallback, useEffect, useState } from "react";
import {
    getAllEmployees,
    getEmployeeTasks,
    deleteTask,
} from "../../appwrite/db_service";

const useEmployeesWithTasks = () => {
    const [employees, setEmployees] = useState([]);

    const fetchEmployees = useCallback(async () => {
        const response = await getAllEmployees();

        const employeesWithTasks = await Promise.all(
            response.documents.map(async (employee) => {
                const tasks = await getEmployeeTasks(employee.userId);
                return {
                    ...employee,
                    tasks: tasks.documents,
                };
            }),
        );

        setEmployees(employeesWithTasks);
    }, []);

    const deleteTaskForEmployee = useCallback(async (employeeId, taskId) => {
        await deleteTask(taskId);
        setEmployees((prevEmployees) =>
            prevEmployees.map((employee) =>
                employee.$id === employeeId
                    ? {
                        ...employee,
                        tasks: employee.tasks.filter((t) => t.$id !== taskId),
                    }
                    : employee,
            ),
        );
    }, []);

    useEffect(() => {
        fetchEmployees();
    }, [fetchEmployees]);

    return {
        employees,
        refreshEmployees: fetchEmployees,
        deleteTaskForEmployee,
    };
};

export default useEmployeesWithTasks;
