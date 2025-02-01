import { useEffect, useState } from "react";
import axios from "axios";

export default function Protected() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/protected", { withCredentials: true })
      .then(res => setMessage(res.data.message))
      .catch(() => setMessage("Access Denied"));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold">Protected Page</h2>
      <p className="mt-4">{message}</p>
    </div>
  );
}
