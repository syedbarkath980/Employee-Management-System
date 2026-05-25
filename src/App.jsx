import { Login, AdminDashboard } from "../index";
import { useState, useEffect } from "react";
import { getCurrentUser } from "../appwrite/auth_service";

const App = () => {
  const [isLoggedin, setIsloggedin] = useState(null);
  const [loading, setLoading] = useState(true);

  const onLoginSuccess = () => {
    setIsloggedin(true);
  };

  const onLogoutSuccess = () => {
    setIsloggedin(false);
  };

  useEffect(() => {
    getCurrentUser()
      .then(() => {
        setIsloggedin(true);
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
      {isLoggedin == true ? (
        <AdminDashboard onLogoutSuccess={onLogoutSuccess} />
      ) : (
        <Login onLoginSuccess={onLoginSuccess} />
      )}
    </div>
  );
};

export default App;
