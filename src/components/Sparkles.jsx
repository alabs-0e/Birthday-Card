export default function Sparkles() {
  const sparkles = [
    { top: "20%", left: "15%", delay: "0s" },
    { top: "35%", right: "18%", delay: "1s" },
    { top: "70%", left: "20%", delay: "2s" },
    { top: "60%", right: "12%", delay: "3s" },
    { top: "5%", right: "14%", delay: "4s" },
  ];

  return (
    <>
      {sparkles.map((sparkle, index) => (
        <span
          key={index}
          className="absolute z-20 text-violet-300 animate-sparkle"
          style={{
            ...sparkle,
            animationDelay: sparkle.delay,
          }}
        >
          ✦
        </span>
      ))}
    </>
  );
}