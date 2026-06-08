import useTaskCounts from "../../hooks/useTaskCounts";

const EmployeeAccordian = ({ employee, isOpen, onToggle, onDeleteTask }) => {
  const { total, pending, completed } = useTaskCounts(employee.tasks);

  return (
    <div className="rounded-2xl border border-[#E1E1E1] bg-white/95 shadow-[0_12px_30px_rgba(43,62,80,0.06)]">
      <button
        onClick={onToggle}
        className="w-full flex flex-col items-start gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 sm:py-5 hover:bg-[#FBFBFB] hover:rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#87CEEB]"
        aria-expanded={isOpen}
      >
        <div className="flex flex-col justify-center">
          <span className="text-lg sm:text-xl font-bold text-[#084B8A]">
            {employee.name}
          </span>
        </div>

        <div className="flex w-full flex-col items-start gap-1 sm:w-auto sm:items-end">
          <div className="grid w-full grid-cols-3 gap-4 text-[10px] uppercase tracking-[0.14em] text-[#2B3E50]/60 sm:w-56 sm:gap-6 sm:text-xs sm:tracking-[0.18em]">
            <div className="text-center">Total</div>
            <div className="text-center">Pending</div>
            <div className="text-center">Completed</div>
          </div>
          <div className="grid w-full grid-cols-3 gap-4 text-lg font-bold text-[#2B3E50] sm:w-56 sm:gap-6 sm:text-2xl">
            <div className="text-center">{total}</div>
            <div className="text-center text-[#B85E00]">{pending}</div>
            <div className="text-center text-[#1F7A36]">{completed}</div>
          </div>
        </div>

        <div className="self-end text-xs text-[#084B8A] sm:self-auto sm:text-sm">
          {isOpen ? "▲" : "▼"}
        </div>
      </button>

      {isOpen && (
        <div className="px-4 pb-4 sm:px-6 sm:pb-6 grid gap-3">
          {employee.tasks.map((task) => {
            const dateString = task.$createdAt;
            const createdDate = new Date(dateString);
            const formattedDate = createdDate.toLocaleString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
              timeZone: "Asia/Kolkata",
            });
            return (
              <div
                key={task.$id}
                className="rounded-xl border border-[#E1E1E1] bg-[#FBFBFB] px-4 py-4"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-[#2B3E50]">
                      {task.title}
                    </h4>
                    <p className="mt-1 text-[11px] font-medium leading-5 text-[#2B3E50]/45 sm:text-xs">
                      {formattedDate}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 self-start">
                    <span
                      className={`text-xs font-semibold uppercase ${task.status === "pending" ? "text-[#B85E00]" : "text-[#1F7A36]"}`}
                    >
                      {task.status}
                    </span>
                    <button
                      onClick={() => onDeleteTask(task.$id)}
                      className="rounded-full border border-[#F75C4E] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#F75C4E] transition hover:bg-[#F75C4E] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F75C4E]/30"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default EmployeeAccordian;
