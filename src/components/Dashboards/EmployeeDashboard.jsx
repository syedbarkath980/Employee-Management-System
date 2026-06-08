import CompletedTaskAccordian from "../other/CompletedTaskAccordian";
import useEmployeeTasks from "../../hooks/useEmployeeTasks";
import useLogout from "../../hooks/useLogout";

const EmployeeDashboard = ({ onLogoutSuccess }) => {


  const { username, tasks, markCompleted, counts } = useEmployeeTasks();
  const handleLogout = useLogout({ onLogoutSuccess });
  const pendingTasks = counts.pending;
  const completedTasks = counts.completed;
  const totalTasks = counts.total;

  

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(8,75,138,0.2),transparent_30%),radial-gradient(circle_at_top_right,rgba(135,206,235,0.32),transparent_26%),linear-gradient(180deg,#FBFBFB_0%,#EEF6FC_50%,#DAEAF8_100%)] px-4 py-4 sm:px-6 sm:py-6 lg:px-8"
      aria-label={`${totalTasks} assigned tasks, ${pendingTasks} pending, ${completedTasks} completed`}
    >
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#084B8A]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -top-16 h-80 w-80 rounded-full bg-[#87CEEB]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#084B8A]/8 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 pb-4">
        <header className="sticky top-4 z-20 rounded-2xl border border-[#E1E1E1]/90 bg-white/92 px-5 py-4 shadow-[0_20px_60px_rgba(43,62,80,0.08)] backdrop-blur-xl sm:px-6 sm:py-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#084B8A]">
                Employee dashboard
              </p>
              <h1 className="text-2xl font-bold tracking-tight text-[#2B3E50] sm:text-3xl">
                Hello, <br />
                {username} 👋🏻
              </h1>
              <p className="max-w-2xl text-sm leading-6 text-[#2B3E50]/72 sm:text-base">
                Track your workload, stay on top of what is pending, and review
                the next action from a clean EMS workspace.
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="mr-2 inline-flex items-center justify-center rounded-full border border-[#084B8A] bg-[#FBFBFB] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#084B8A] transition hover:bg-[#084B8A] hover:text-[#FBFBFB]"
            >
              Logout
            </button>
          </div>
        </header>

        <section className="grid gap-4 sm:grid-cols-3">
          <article className="rounded-2xl border border-[#E1E1E1] bg-white/95 p-5 shadow-[0_18px_40px_rgba(43,62,80,0.06)] sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#084B8A]">
              Assigned Tasks
            </p>
            <p className="mt-3 text-4xl font-bold tracking-tight text-[#2B3E50]">
              {totalTasks}
            </p>
            <p className="mt-2 text-sm text-[#2B3E50]/70">
              Total tasks currently assigned to you.
            </p>
          </article>

          <article className="rounded-2xl border border-[#E1E1E1] bg-white/95 p-5 shadow-[0_18px_40px_rgba(43,62,80,0.06)] sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF9800]">
              Pending Tasks
            </p>
            <p className="mt-3 text-4xl font-bold tracking-tight text-[#2B3E50]">
              {pendingTasks}
            </p>
            <p className="mt-2 text-sm text-[#2B3E50]/70">
              Tasks waiting for your attention.
            </p>
          </article>

          <article className="rounded-2xl border border-[#E1E1E1] bg-white/95 p-5 shadow-[0_18px_40px_rgba(43,62,80,0.06)] sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#28A745]">
              Completed Tasks
            </p>
            <p className="mt-3 text-4xl font-bold tracking-tight text-[#2B3E50]">
              {completedTasks}
            </p>
            <p className="mt-2 text-sm text-[#2B3E50]/70">
              Tasks finished and ready for review.
            </p>
          </article>
        </section>

        <section className="space-y-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#084B8A]">
                Task board
              </p>
              <h2 className="mt-1 text-xl font-bold tracking-tight text-[#2B3E50] sm:text-2xl">
                Your active work
              </h2>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-3">
            {tasks
              .filter((task) => task.status === "pending")
              .map((task) => {
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
                  <article
                    key={task.$id}
                    className="rounded-2xl border border-[#E1E1E1] bg-[#FBFBFB] p-5 shadow-[0_18px_40px_rgba(43,62,80,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(43,62,80,0.1)] sm:p-6"
                  >
                    <div className="flex h-full flex-col gap-4">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <h3 className="text-xl font-bold tracking-tight text-[#2B3E50]">
                            {task.title}
                          </h3>
                          <span
                            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${task.status === "pending" ? "bg-amber-100 text-[#B85E00]" : "bg-green-100 text-[#1F7A36]"}`}
                          >
                            {task.status}
                          </span>
                        </div>
                        <p className="text-sm leading-6 text-[#2B3E50]/70">
                          {task.description}
                        </p>
                      </div>

                      <div className="mt-auto flex items-center justify-between gap-3 border-t border-[#E1E1E1] pt-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#084B8A]">
                            {task.category}
                          </p>
                          <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-[#2B3E50]/55">
                            {formattedDate}
                          </p>
                        </div>

                        <button
                          aria-label={`Mark ${task.title} as completed`}
                          className="inline-flex items-center justify-center rounded-2xl bg-[#084B8A] px-5 py-2 text-sm font-semibold text-white normal-case shadow-md transition-colors hover:bg-[#073a6f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#87CEEB] focus-visible:ring-offset-2"
                          onClick={() => markCompleted(task.$id)}
                        >
                          Done ✅
                        </button>
                      </div>
                    </div>
                  </article>
                );
              } )}
          </div>
        </section>
        <section>
          <CompletedTaskAccordian tasks={tasks} tId={tasks.id} />
        </section>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
