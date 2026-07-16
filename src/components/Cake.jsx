export default function Cake() {
  return (
    <svg
      width="110"
      height="130"
      viewBox="0 0 110 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="my-8"
    >
      {/* Candle */}
      <line
        x1="55"
        y1="18"
        x2="55"
        y2="35"
        stroke="white"
        strokeWidth="2"
      />

      {/* Flame */}
      <ellipse
        cx="55"
        cy="12"
        rx="4"
        ry="7"
        fill="#C4B5FD"
      />

      {/* Top Layer */}
      <rect
        x="30"
        y="35"
        width="50"
        height="25"
        rx="8"
        stroke="white"
        strokeWidth="2"
      />

      {/* Bottom Layer */}
      <rect
        x="20"
        y="65"
        width="70"
        height="35"
        rx="10"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
}