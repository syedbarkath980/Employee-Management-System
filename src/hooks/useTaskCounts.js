import { useMemo } from "react";

const useTaskCounts = (tasks) =>
    useMemo(() => {
        const total = tasks.length;
        const pending = tasks.filter((t) => t.status === "pending").length;
        const completed = tasks.filter((t) => t.status === "completed").length;

        return { total, pending, completed };
    }, [tasks]);

export default useTaskCounts;
