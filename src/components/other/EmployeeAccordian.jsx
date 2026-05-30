const EmployeeAccordian = ({ employee, isOpen, onToggle, onDeleteTask }) => {
  const total = employee.tasks.length;
  const pending = employee.tasks.filter((t) => t.status === "pending").length;
  const completed = employee.tasks.filter(
    (t) => t.status === "completed",
  ).length;

  return (
    <div className="rounded-2xl border border-[#E1E1E1] bg-white/95 shadow-[0_12px_30px_rgba(43,62,80,0.06)]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5 hover:bg-[#FBFBFB] hover:rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#87CEEB]"
        aria-expanded={isOpen}
      >
        <div className="flex flex-col justify-center">
          <span className="text-lg sm:text-xl font-bold text-[#084B8A]">
            {employee.name}
          </span>
        </div>

        <div className="flex flex-col items-end gap-1">
          <div className="grid grid-cols-3 gap-6 text-xs uppercase tracking-[0.18em] text-[#2B3E50]/60 w-56">
            <div className="text-center">Total</div>
            <div className="text-center">Pending</div>
            <div className="text-center">Completed</div>
          </div>
          <div className="grid grid-cols-3 gap-6 text-xl sm:text-2xl font-bold text-[#2B3E50] w-56">
            <div className="text-center">{total}</div>
            <div className="text-center text-[#B85E00]">{pending}</div>
            <div className="text-center text-[#1F7A36]">{completed}</div>
          </div>
        </div>

        <div className="text-[#084B8A] text-sm">{isOpen ? "▲" : "▼"}</div>
      </button>

      {isOpen && (
        <div className="px-4 pb-4 sm:px-6 sm:pb-6 grid gap-3">
          {employee.tasks.map((task) => (
            <div
              key={task.$id}
              className="rounded-xl border border-[#E1E1E1] bg-[#FBFBFB] p-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h4 className="text-sm font-semibold text-[#2B3E50]">
                  {task.title}
                </h4>
                <div className="flex items-center gap-3">
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
          ))}
        </div>
      )}
    </div>
  );
};

export default EmployeeAccordian;
