import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Confetti from "./Confetti";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/confetti" element={<Confetti />} />
    </Routes>
  );
}

export default App;
