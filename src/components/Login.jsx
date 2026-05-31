import { FiEye, FiEyeOff } from "react-icons/fi";
import useLogin from "../hooks/useLogin";

const Login = ({ onLoginSuccess, setUserType }) => {
  const {
    email,
    password,
    showPassword,
    setEmail,
    setPassword,
    toggleVisibility,
    handleFormSubmit,
  } = useLogin({ onLoginSuccess, setUserType });

  return (
    <div className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#FBFBFB] px-4">
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#084B8A]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 -top-16 h-80 w-80 rounded-full bg-[#87CEEB]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#084B8A]/8 blur-3xl" />
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
            <div className="relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full appearance-none rounded-xl border border-[#E1E1E1] bg-white px-4 py-3 pr-12 text-base text-[#2B3E50] outline-none transition placeholder:text-base placeholder:text-[#2B3E50]/40 hover:border-[#E1E1E1] focus:border-[#084B8A] focus:ring-4 focus:ring-[#87CEEB]/25"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={toggleVisibility}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-[#E1E1E1] bg-[#FBFBFB] p-2 text-[#2B3E50] transition hover:border-[#084B8A] hover:text-[#084B8A] focus:outline-none focus:ring-4 focus:ring-[#87CEEB]/25"
              >
                {showPassword ? (
                  <FiEyeOff className="h-4 w-4" />
                ) : (
                  <FiEye className="h-4 w-4" />
                )}
              </button>
            </div>
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
