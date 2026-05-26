import { Login, AdminDashboard } from "../index";
import { useState, useEffect } from "react";
import { getCurrentUser } from "../appwrite/auth_service";
import EmployeeDashboard from "./components/Dashboards/EmployeeDashboard";

const App = () => {
  const [isLoggedin, setIsloggedin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userType, setUserType] = useState(null);

  const onLoginSuccess = () => {
    setIsloggedin(true);
  };

  const onLogoutSuccess = () => {
    setIsloggedin(false);
  };

  useEffect(() => {
    getCurrentUser()
      .then((user) => {
        setIsloggedin(true);
        setUserType(user.name);
      })
      .catch(() => {
        setIsloggedin(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {isLoggedin === true && userType === "Admin" ? (
        <AdminDashboard onLogoutSuccess={onLogoutSuccess} />
      ) : isLoggedin === true && userType !== "Admin" ? (
        <EmployeeDashboard onLogoutSuccess={onLogoutSuccess} />
      ) : (
        <Login onLoginSuccess={onLoginSuccess} setUserType={setUserType} />
      )}
    </div>
  );
};

export default App;
