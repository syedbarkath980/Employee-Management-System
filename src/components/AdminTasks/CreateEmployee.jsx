import { useState } from "react";
import { createEmployee } from "../../../appwrite/auth_service";
import { createUser } from "../../../appwrite/db_service";

const CreateEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await createEmployee(name, email, password);
      await createUser(name, email, user.$id);
      console.log("Employee Created Successfully");
    } catch {
      console.log("Error", Error);
    }
  };

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="rounded-2xl border border-[#E1E1E1] bg-white/95 p-5 shadow-[0_20px_60px_rgba(43,62,80,0.08)] backdrop-blur-sm sm:p-6 lg:p-8">
        <div className="border-b border-[#E1E1E1] pb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#084B8A]">
            Admin action
          </p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-[#2B3E50] sm:text-3xl">
            Create an Employee
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#2B3E50]/70 sm:text-base">
            Add a new team member with secure login details and keep the admin
            workflow clean and organized.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <label className="block text-sm font-semibold text-[#2B3E50]">
            Name
          </label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Name..."
            className="w-full rounded-xl border border-[#E1E1E1] bg-[#FBFBFB] px-4 py-3 text-sm text-[#2B3E50] outline-none transition placeholder:text-[#2B3E50]/35 focus:border-[#084B8A] focus:bg-white focus:ring-4 focus:ring-[#87CEEB]/25"
          />
          <label className="block text-sm font-semibold text-[#2B3E50]">
            E-mail
          </label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="E-mail..."
            className="w-full rounded-xl border border-[#E1E1E1] bg-[#FBFBFB] px-4 py-3 text-sm text-[#2B3E50] outline-none transition placeholder:text-[#2B3E50]/35 focus:border-[#084B8A] focus:bg-white focus:ring-4 focus:ring-[#87CEEB]/25"
          />
          <label className="block text-sm font-semibold text-[#2B3E50]">
            Password
          </label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password.."
            className="w-full rounded-xl border border-[#E1E1E1] bg-[#FBFBFB] px-4 py-3 text-sm text-[#2B3E50] outline-none transition placeholder:text-[#2B3E50]/35 focus:border-[#084B8A] focus:bg-white focus:ring-4 focus:ring-[#87CEEB]/25"
          />

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-xl bg-[#084B8A] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#FBFBFB] shadow-[0_14px_30px_rgba(8,75,138,0.22)] transition hover:-translate-y-0.5 hover:bg-[#0a5aa3] hover:shadow-[0_18px_36px_rgba(8,75,138,0.28)] focus:outline-none focus:ring-4 focus:ring-[#87CEEB]/35"
          >
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployee;
