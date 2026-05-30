import { AssignTask } from "../../../index";
import { logout } from "../../../appwrite/auth_service";
import CreateEmployee from "../AdminTasks/CreateEmployee";
import { useEffect, useState } from "react";
import {
  getAllEmployees,
  getEmployeeTasks,
  deleteTask,
} from "../../../appwrite/db_service";
import EmployeeAccordian from "../other/EmployeeAccordian";

const AdminDashboard = ({ onLogoutSuccess }) => {
  const [employees, setEmployees] = useState([]);
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
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
    };
    fetchEmployees();
  }, []);

  const handleDeleteTask = async (employeeId, taskId) => {
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
  };

  const handleLogout = async () => {
    try {
      await logout();
      onLogoutSuccess();
    } catch {
      alert("Cant logout");
    }
  };

  const handleTaskAssigned = async () => {
    const response = await getAllEmployees();
    const employeesWithTasks = await Promise.all(
      response.documents.map(async (employee) => {
        const tasks = await getEmployeeTasks(employee.userId);
        return { ...employee, tasks: tasks.documents };
      }),
    );
    setEmployees(employeesWithTasks);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(8,75,138,0.22),transparent_32%),radial-gradient(circle_at_top_right,rgba(135,206,235,0.38),transparent_28%),linear-gradient(180deg,#FBFBFB_0%,#EAF3FA_48%,#D8EAF8_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#084B8A]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 -top-16 h-80 w-80 rounded-full bg-[#87CEEB]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#084B8A]/8 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-6">
        <header className="relative flex flex-col items-center gap-3 rounded-xl border border-[#E1E1E1] bg-white px-6 py-6 text-center shadow-sm sm:gap-0 sm:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-[#084B8A]">
            Employee Management System
          </p>
          <h1 className="mt-2 w-full text-center text-3xl font-bold tracking-tight text-[#2B3E50] sm:text-4xl">
            ADMIN DASHBOARD
          </h1>
          <button
            onClick={handleLogout}
            className="rounded-full border border-[#084B8A] bg-[#FBFBFB] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#084B8A] transition hover:bg-[#084B8A] hover:text-[#FBFBFB] sm:absolute sm:right-8 sm:top-1/2 sm:-translate-y-1/2"
          >
            Logout
          </button>
        </header>

        <section className="rounded-xl border border-[#E1E1E1] bg-white p-4 shadow-sm sm:p-6 lg:p-8">
          <AssignTask onTaskAssigned={handleTaskAssigned} />
        </section>
        <section className="rounded-2xl border border-[#E1E1E1] bg-white p-4 shadow-sm sm:p-6">
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#084B8A]">
              Team
            </p>
            <h2 className="mt-1 text-lg font-bold text-[#2B3E50]">Employees</h2>
          </div>

          <div className="space-y-4">
            {employees.map((employee) => (
              <EmployeeAccordian
                key={employee.$id}
                employee={employee}
                isOpen={openId === employee.$id}
                onDeleteTask={(taskId) =>
                  handleDeleteTask(employee.$id, taskId)
                }
                onToggle={() =>
                  setOpenId(openId === employee.$id ? null : employee.$id)
                }
              />
            ))}
          </div>
        </section>
        <section>
          <CreateEmployee />
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
