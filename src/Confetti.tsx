import ReactConfetti from "react-confetti";

function Confetti() {
  const correctNumber = localStorage.getItem("correctNumber");
  const tries = localStorage.getItem("tries");

  return (
    <div>
      <ReactConfetti />
      <h1>🎉 Doğru tahmin!</h1>
      <p>Tuttuğum sayı: {correctNumber}</p>
      <p>Toplam deneme sayısı: {tries}</p>
    </div>
  );
}

export default Confetti;
