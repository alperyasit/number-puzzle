import { useEffect, useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const [userNumber, setUserNumber] = useState<number>(0);
  const [tries, setTries] = useState(0);
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

    if (userNumber === randomNumber) {
      navigate("/confetti");
    } else if (userNumber < randomNumber) {
      setMessage("seçilen sayıdan daha küçük değer girdin");
    } else {
      setMessage("seçilen sayıdan daha büyük değer girdin");
    }
  };
  return (
    <div>
      <input
        type="number"
        onChange={(e) => setUserNumber(Number(e.target.value))}
      />
      <button onClick={handleNumber}>Tahmin Et</button>
      <button onClick={() => setRandomNumber(Math.floor(Math.random() * 101))}>
        Yeni Sayı
      </button>
      <div>{message}</div>
    </div>
  );
}

export default Home;
