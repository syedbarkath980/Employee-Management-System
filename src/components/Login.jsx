import { useState } from "react";
import { login } from "../../appwrite/auth_service";

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      onLoginSuccess();
    } catch {
      alert("Invalid Credentials!");
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#FBFBFB] px-4">
      <div
        className="w-full max-w-md rounded-xl border border-[#E1E1E1] bg-white p-10 shadow-[0_20px_60px_rgba(43,62,80,0.08)]"
        style={{
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <div className="mb-8 text-center">
          <h1 className="font-sans text-3xl font-bold tracking-[0.08em] text-[#084B8A]">
            EMS
          </h1>
          <p className=" mt-2 text-sm leading-6 text-[#2B3E50]/70">
            Employee Management System
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleFormSubmit}>
          <div>
            <label className="mb-2 block text-sm font-medium text-[#2B3E50]">
              Email address
            </label>
            <input
              className="w-full appearance-none rounded-xl border border-[#E1E1E1] bg-white px-4 py-3 text-base text-[#2B3E50] outline-none transition placeholder:text-base placeholder:text-[#2B3E50]/40 hover:border-[#E1E1E1] focus:border-[#084B8A] focus:ring-4 focus:ring-[#87CEEB]/25"
              type="text"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#2B3E50]">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full appearance-none rounded-xl border border-[#E1E1E1] bg-white px-4 py-3 text-base text-[#2B3E50] outline-none transition placeholder:text-base placeholder:text-[#2B3E50]/40 hover:border-[#E1E1E1] focus:border-[#084B8A] focus:ring-4 focus:ring-[#87CEEB]/25"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <button
            className="w-full rounded-xl bg-[#084B8A] px-6 py-3.5 font-semibold text-white transition hover:bg-[#2B3E50]"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
