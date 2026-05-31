import { useMemo } from "react";

const useCompletedTasks = (tasks) =>
    useMemo(
        () => tasks.filter((task) => task.status === "completed"),
        [tasks],
    );

export default useCompletedTasks;
