import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Canvas } from "./components";
import Login from "../login";
import Signup from "../signup";
import ChangePassword from "../change.password";

function App() {
  return (
    <Canvas>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/change-password" element={<ChangePassword />} />
        </Routes>
      </Router>
    </Canvas>
  );
}

export default App;
