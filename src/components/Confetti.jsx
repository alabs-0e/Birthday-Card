import Confetti from "react-confetti";

export default function BirthdayConfetti() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={90}
        recycle={false}
        gravity={0.18}
      />
    </div>
  );
}