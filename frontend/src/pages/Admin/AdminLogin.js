import axios from "axios";
import { useState } from "react";
import { message } from "antd";

function Login() {
    const [user, setUser] = useState({
      username: "",
      password: "",
    });

    const login = async () => {
      try {
        
        const response = await axios.post("http://localhost:5000/api/admin-login", user);

        if (response.data.success) {
          message.success(response.data.message);
          localStorage.setItem("token", JSON.stringify(response.data));
          window.location.href = "/admin";
        } else {
          message.error(response.data.message);
        }
      } catch (error) {
        message.error(error.message);
      }
    };
  
    return (
      <div className="flex justify-center items-center h-screen bg-[#091826]">
        <div className="w-80 flex gap-5 p-5 shadow-2xl border border-gray-700 flex-col bg-white">
          <h1 className="text-2xl font-sans font-medium text-sto text-center">Admin Login</h1>
          <hr />
          <input
            type="text"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="Username"
            className="border border-slate-400 p-1 "
          />
          <input
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Password"
            className="border border-slate-400 p-1 "
          />
          <button className="bg-[#1c5490] text-white p-2" onClick={login}>
            Login
          </button>
        </div>
      </div>
    );
  }
  
  export default Login;
  