import { logout } from "../../../appwrite/auth_service";

const EmployeeDashboard = ({ onLogoutSuccess }) => {
  const handleLogout = async () => {
    try {
      await logout();
      onLogoutSuccess();
    } catch {
      alert("Cant logout");
    }
  };

  return (
    <div>
      EmployeeDashboard
      <h1>
        Hello <br />
        Syed 👋🏻
      </h1>
      <button
        onClick={handleLogout}
        className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full border border-[#084B8A] bg-[#FBFBFB] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#084B8A] transition hover:bg-[#084B8A] hover:text-[#FBFBFB] sm:right-8"
      >
        Logout
      </button>
    </div>
  );
};

export default EmployeeDashboard;
