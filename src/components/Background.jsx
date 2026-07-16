export default function Background() {
    const stars = [
  { top: "10%", left: "15%" },
  { top: "25%", left: "80%" },
  { top: "45%", left: "30%" },
  { top: "70%", left: "85%" },
  { top: "85%", left: "20%" },
  { top: "15%", left: "55%" },
  { top: "60%", left: "65%" },
];
  return (
    <div className="fixed inset-0 -z-10 bg-[#09090B] overflow-hidden">
      {stars.map((star, index) => (
        <span
          key={index}
          className="absolute w-1 h-1 rounded-full bg-white opacity-50 animate-twinkle"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: `${index * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
}