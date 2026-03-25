const SunIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="9" fill="#FFB800" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
      <line
        key={i}
        x1="24"
        y1="6"
        x2="24"
        y2="10"
        stroke="#FFB800"
        strokeWidth="2.5"
        strokeLinecap="round"
        transform={`rotate(${deg} 24 24)`}
      />
    ))}
  </svg>
);

const CloudyIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Sun behind */}
    <circle cx="18" cy="18" r="7" fill="#FFB800" opacity="0.9" />
    {[0, 60, 120, 180, 240, 300].map((deg, i) => (
      <line
        key={i}
        x1="18"
        y1="5"
        x2="18"
        y2="8"
        stroke="#FFB800"
        strokeWidth="2"
        strokeLinecap="round"
        transform={`rotate(${deg} 18 18)`}
      />
    ))}
    {/* Cloud */}
    <ellipse cx="30" cy="30" rx="10" ry="7" fill="#D0E8FF" />
    <ellipse cx="22" cy="32" rx="8" ry="6" fill="#D0E8FF" />
    <ellipse cx="26" cy="27" rx="7" ry="6" fill="#D0E8FF" />
    <ellipse cx="30" cy="30" rx="10" ry="7" fill="white" opacity="0.5" />
  </svg>
);

const RainIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Cloud */}
    <ellipse cx="28" cy="20" rx="10" ry="7" fill="#90AEC6" />
    <ellipse cx="20" cy="22" rx="8" ry="6" fill="#90AEC6" />
    <ellipse cx="24" cy="17" rx="7" ry="6" fill="#90AEC6" />
    {/* Rain drops */}
    <line
      x1="18"
      y1="30"
      x2="16"
      y2="38"
      stroke="#5B9BD5"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="25"
      y1="31"
      x2="23"
      y2="39"
      stroke="#5B9BD5"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="32"
      y1="30"
      x2="30"
      y2="38"
      stroke="#5B9BD5"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const ThunderstormIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="28" cy="18" rx="10" ry="7" fill="#7A8C9E" />
    <ellipse cx="20" cy="20" rx="8" ry="6" fill="#7A8C9E" />
    <ellipse cx="24" cy="15" rx="7" ry="6" fill="#7A8C9E" />
    {/* Lightning bolt */}
    <polygon points="26,26 22,34 25,34 21,42 29,30 25,30" fill="#FFD700" />
  </svg>
);

const HeavyRainIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="28" cy="18" rx="10" ry="7" fill="#6A8299" />
    <ellipse cx="20" cy="20" rx="8" ry="6" fill="#6A8299" />
    <ellipse cx="24" cy="15" rx="7" ry="6" fill="#6A8299" />
    <line
      x1="16"
      y1="28"
      x2="13"
      y2="38"
      stroke="#4A90D9"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <line
      x1="23"
      y1="29"
      x2="20"
      y2="39"
      stroke="#4A90D9"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <line
      x1="30"
      y1="28"
      x2="27"
      y2="38"
      stroke="#4A90D9"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <line
      x1="37"
      y1="29"
      x2="34"
      y2="39"
      stroke="#4A90D9"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

const SnowIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="28" cy="18" rx="10" ry="7" fill="#B8D0E8" />
    <ellipse cx="20" cy="20" rx="8" ry="6" fill="#B8D0E8" />
    <ellipse cx="24" cy="15" rx="7" ry="6" fill="#B8D0E8" />
    {/* Snowflakes */}
    {[16, 24, 32].map((x, i) => (
      <g key={i} transform={`translate(${x}, 34)`}>
        <line
          x1="0"
          y1="-4"
          x2="0"
          y2="4"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <line
          x1="-4"
          y1="0"
          x2="4"
          y2="0"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <line
          x1="-2.8"
          y1="-2.8"
          x2="2.8"
          y2="2.8"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <line
          x1="2.8"
          y1="-2.8"
          x2="-2.8"
          y2="2.8"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </g>
    ))}
  </svg>
);

const FogIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {[12, 18, 24, 30, 36].map((y, i) => (
      <line
        key={i}
        x1={i % 2 === 0 ? 8 : 12}
        y1={y}
        x2={i % 2 === 0 ? 40 : 38}
        y2={y}
        stroke="#B0BEC5"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity={1 - i * 0.12}
      />
    ))}
  </svg>
);

const WindyIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path
      d="M8 18 Q20 14 28 18 Q36 22 28 26 Q20 30 12 26"
      stroke="#78909C"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M8 28 Q18 24 26 28 Q34 32 26 36 Q18 40 10 36"
      stroke="#78909C"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
    {/* Wind source circle */}
    <circle cx="38" cy="14" r="4" fill="#90CAF9" />
    <path d="M38 10 Q44 14 38 18" fill="#90CAF9" />
  </svg>
);

const MoonIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M30 8 A16 16 0 1 0 30 40 A12 12 0 1 1 30 8Z" fill="#FFC107" />
    <circle cx="34" cy="14" r="1.5" fill="#FFE082" opacity="0.7" />
    <circle cx="38" cy="22" r="1" fill="#FFE082" opacity="0.5" />
  </svg>
);

const PartlyCloudyNightIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M16 18 A8 8 0 1 0 16 32 A6 6 0 1 1 16 18Z" fill="#FFC107" />
    <ellipse cx="30" cy="28" rx="10" ry="7" fill="#90A4AE" />
    <ellipse cx="22" cy="30" rx="8" ry="6" fill="#90A4AE" />
    <ellipse cx="26" cy="25" rx="7" ry="6" fill="#90A4AE" />
  </svg>
);

export {
  SunIcon,
  CloudyIcon,
  RainIcon,
  ThunderstormIcon,
  HeavyRainIcon,
  SnowIcon,
  FogIcon,
  WindyIcon,
  MoonIcon,
  PartlyCloudyNightIcon,
};
