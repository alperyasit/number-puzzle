import ReactConfetti from "react-confetti";
import { useNavigate } from "react-router-dom";

function Confetti() {
  const correctNumber = localStorage.getItem("correctNumber");
  const tries = localStorage.getItem("tries");
  const navigate = useNavigate();

  return (
    <div className="confetti-container">
      <ReactConfetti />
      <h1>🎉 Its True!</h1>
      <p>My Number: {correctNumber}</p>
      <p>Total tries: {tries}</p>
      <button onClick={() => navigate("/")}>Guess The New Number</button>
    </div>
  );
}

export default Confetti;
