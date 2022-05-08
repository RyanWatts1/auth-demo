import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Canvas } from "./components";
import Login from "../login";
import Signup from "../signup";

function App() {
  return (
    <Canvas>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Signup />} />
        </Routes>
      </Router>
    </Canvas>
  );
}

export default App;
