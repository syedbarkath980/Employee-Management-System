import useCompletedTasks from "../../hooks/useCompletedTasks";
import useDisclosure from "../../hooks/useDisclosure";

const CompletedTaskAccordian = ({ tasks }) => {
  const { isOpen, toggle } = useDisclosure(false);
  const completedTasks = useCompletedTasks(tasks);

  return (
    <div className="rounded-2xl border border-[#E1E1E1] bg-white/95 shadow-[0_18px_40px_rgba(43,62,80,0.06)]">
      <button
        onClick={toggle}
        className="flex w-full items-center justify-between px-6 py-4"
      >
        <span className="text-sm font-semibold uppercase tracking-[0.28em] text-[#084B8A]">
          Completed Tasks ({completedTasks.length})
        </span>
        <span className="text-[#084B8A]">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="grid gap-4 px-6 pb-6 lg:grid-cols-2 2xl:grid-cols-3">
          {completedTasks.length === 0 ? (
            <p className="text-sm text-[#2B3E50]/60">No completed tasks yet.</p>
          ) : (
            completedTasks.map((task) => (
              <div
                key={task.$id}
                className="rounded-2xl border border-[#E1E1E1] bg-[#FBFBFB] p-5"
              >
                <h3 className="text-lg font-bold text-[#2B3E50]">
                  {task.title}
                </h3>
                <p className="mt-1 text-sm text-[#2B3E50]/70">
                  {task.description}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#084B8A]">
                  {task.category}
                </p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default CompletedTaskAccordian;
