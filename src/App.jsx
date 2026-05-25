import { Login, AdminDashboard } from "../index";
import { useState } from "react";

const App = () => {
  const [isLoggedin, setIsloggedin] = useState(false);

  const onLoginSuccess = () => {
    setIsloggedin(true);
  };

  return (
    <div>
      {isLoggedin == true ? (
        <AdminDashboard />
      ) : (
        <Login onLoginSuccess={onLoginSuccess} />
      )}
    </div>
  );
};

export default App;
