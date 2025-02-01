import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn.jsx";
import Protected from "./Protected";
import Navbar from "./Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/protected" element={<Protected />} />
      </Routes>
    </Router>
  );
}
