import useAssignTaskForm from "../../hooks/useAssignTaskForm";

const AssignTask = ({ onTaskAssigned }) => {
  const {
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
  } = useAssignTaskForm({ onTaskAssigned });

  return (
    <div className="w-full">
      <div className="rounded-xl border border-[#E1E1E1] bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-6 border-b border-[#E1E1E1] pb-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#084B8A]">
            Task Assignment
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#2B3E50]">
            Assign work
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#2B3E50]/70">
            Create a task, attach it to the right employee, and keep the
            workload organized.
          </p>
        </div>

        <form className="grid gap-5" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-[#2B3E50]">Title</label>
            <input
              value={title}
              type="text"
              placeholder="Enter title..."
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg border border-[#E1E1E1] bg-[#FBFBFB] px-4 py-3 text-base text-[#2B3E50] outline-none transition placeholder:text-[#2B3E50]/40 focus:border-[#084B8A] focus:ring-2 focus:ring-[#87CEEB]/20"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium text-[#2B3E50]">
              Employee
            </label>
            <select
              value={assignedto}
              onChange={(e) => setAssignedTo(e.target.value)}
              className="w-full rounded-lg border border-[#E1E1E1] bg-[#FBFBFB] px-4 py-3 text-base text-[#2B3E50] outline-none transition focus:border-[#084B8A] focus:ring-2 focus:ring-[#87CEEB]/20"
            >
              <option>Select an employee</option>
              {allEmployees.map((employee) => (
                <option value={employee.userId} key={employee.userId}>
                  {employee.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium text-[#2B3E50]">
              Category
            </label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="Dev, UI, Operations..."
              className="w-full rounded-lg border border-[#E1E1E1] bg-[#FBFBFB] px-4 py-3 text-base text-[#2B3E50] outline-none transition placeholder:text-[#2B3E50]/40 focus:border-[#084B8A] focus:ring-2 focus:ring-[#87CEEB]/20"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium text-[#2B3E50]">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="5"
              placeholder="Add task details, expectations, or deadlines..."
              className="w-full resize-none rounded-lg border border-[#E1E1E1] bg-[#FBFBFB] px-4 py-3 text-base text-[#2B3E50] outline-none transition placeholder:text-[#2B3E50]/40 focus:border-[#084B8A] focus:ring-2 focus:ring-[#87CEEB]/20"
            />
          </div>

          <div className="flex flex-col gap-3 border-t border-[#E1E1E1] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[#2B3E50]/70">
              Review the assignment before sending it to the selected employee.
            </p>
            <button
              type="submit"
              className="rounded-lg bg-[#084B8A] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#2B3E50]"
            >
              Assign Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssignTask;
