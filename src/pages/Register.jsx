import { useState } from "react";
import API from "../api/axios";

export default function Register() {
  const [form, setForm] = useState({ name:"", email:"", password:"", role:"user" });

  const register = async () => {
    try {
      await API.post("/auth/register", {
        name: form.name,
        email: form.email,
        password: form.password,
        role: form.role
      });
      alert("Registered successfully");
      window.location.href = "/";
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={e=>setForm({...form,password:e.target.value})}/>
      <select onChange={e=>setForm({...form,role:e.target.value})}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={register}>Register</button>
    </div>
  );
}
