import { useEffect, useState } from "react";
import "./App.scss";
import { useNavigate } from "react-router-dom";

function Home() {
  const [userNumber, setUserNumber] = useState<number>(0);
  const [tries, setTries] = useState(0);
  const [info, setInfo] = useState("");
  const [randomNumber, setRandomNumber] = useState(() =>
    Math.floor(Math.random() * 101)
  );
  localStorage.setItem("correctNumber", String(userNumber));
  localStorage.setItem("tries", String(tries));
  const navigate = useNavigate();

  useEffect(() => {
    console.log(randomNumber);
  }, [randomNumber]);

  const [message, setMessage] = useState("");

  const handleNumber = () => {
    setTries((k) => k + 1);
    if (!userNumber) {
      setMessage("PLEASE ENTER A VALUE");
      return;
    }
    if (userNumber === randomNumber) {
      navigate("/confetti");
    } else if (userNumber < randomNumber) {
      setMessage("YOU ENTERED A VALUE SMALLER THAN THE SELECTED NUMBER");
    } else {
      setMessage("YOU ENTERED A VALUE BIGGER THAN THE SELECTED NUMBER");
    }
  };

  const infoNumber = () => {
    if (randomNumber % 2 === 0) {
      setInfo("the predicted number is an even number");
    } else {
      setInfo("the predicted number is an odd number");
    }
  };
  return (
    <div className="container">
      <input
        type="number"
        placeholder="Enter a number"
        onChange={(e) => setUserNumber(Number(e.target.value))}
      />
      <div className="btn-container">
        <button onClick={handleNumber}>Guess The Number</button>
        <button
          onClick={() => setRandomNumber(Math.floor(Math.random() * 101))}
        >
          New Number
        </button>
        <button onClick={infoNumber}>Get Information To Predict</button>
      </div>
      <div className="text-container">
        <div>{message.toUpperCase()}</div>
        <div>{info.toUpperCase()}</div>
      </div>
    </div>
  );
}

export default Home;
