import React from "react";

type LogoProps = {
  className?: string;
};

// Simple SVG that approximates the provided logo: two rounded triangular shapes
// pointing outward. The fill follows currentColor so it adapts to theme colors.
const Logo: React.FC<LogoProps> = ({ className }) => (
  <svg
    viewBox="0 0 96 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Sutra Technologies Logo"
  >
    {/* Left rounded triangle (pointing left) */}
    <path
      d="M44 10 C44 6, 40 4, 36 6 L12 20 C6 24, 6 32, 12 36 L36 50 C40 52, 44 50, 44 46 L36 24 Z"
      fill="currentColor"
      opacity="0.9"
    />
    {/* Right rounded triangle (pointing right) */}
    <path
      d="M52 10 C52 6, 56 4, 60 6 L84 20 C90 24, 90 32, 84 36 L60 50 C56 52, 52 50, 52 46 L60 24 Z"
      fill="currentColor"
      opacity="0.9"
    />
  </svg>
);

export default Logo;


