import { useState } from "react";
import axios from "axios";

export default function SignIn() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://cookie-backend-hiaq.onrender.com/signin", formData, {
        withCredentials: true, // Allows cookies to be sent
      });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold">Sign In</h2>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="border p-2"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="border p-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Sign In</button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
