import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { Canvas } from "./components"
import Login from "../login";

function App() {
  return(
    <Canvas>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </Canvas>
  )
}

export default App;
