"use client";

import { useId } from "react";

export default function Wave({ flip = false, className = "", opacity = 1 }) {
  const uniqueId = useId().replace(/:/g, "");
  const fillGradId = `user-wave-fill-${uniqueId}`;
  const strokeGradId = `user-wave-stroke-${uniqueId}`;

  // The exact wave curve path provided by the user
  const wavePath =
    "M 0,400 L 0,150 C 52.18345713605963,163.4781913346903 104.36691427211926,176.95638266938062 148,162 C 191.63308572788074,147.04361733061938 226.71580004758255,103.65266065716781 269,119 C 311.28419995241745,134.34733934283219 360.76988553755046,208.4329747019482 413,209 C 465.23011446244954,209.5670252980518 520.2046578022154,136.61544053503926 576,114 C 631.7953421977846,91.38455946496074 688.4114832535885,119.10526315789474 740,135 C 791.5885167464115,150.89473684210526 838.1494091834306,154.96350683338179 877,165 C 915.8505908165694,175.03649316661821 946.9908800126886,191.0407095085781 993,201 C 1039.0091199873114,210.9592904914219 1099.8870707658145,214.87365513230594 1153,208 C 1206.1129292341855,201.12634486769406 1251.460836924053,183.46466996219831 1298,172 C 1344.539163075947,160.53533003780169 1392.2695815379734,155.26766501890086 1440,150 L 1440,400 L 0,400 Z";

  // The upper crest line curve for the glowing neon rim
  const crestLine =
    "M 0,150 C 52.18345713605963,163.4781913346903 104.36691427211926,176.95638266938062 148,162 C 191.63308572788074,147.04361733061938 226.71580004758255,103.65266065716781 269,119 C 311.28419995241745,134.34733934283219 360.76988553755046,208.4329747019482 413,209 C 465.23011446244954,209.5670252980518 520.2046578022154,136.61544053503926 576,114 C 631.7953421977846,91.38455946496074 688.4114832535885,119.10526315789474 740,135 C 791.5885167464115,150.89473684210526 838.1494091834306,154.96350683338179 877,165 C 915.8505908165694,175.03649316661821 946.9908800126886,191.0407095085781 993,201 C 1039.0091199873114,210.9592904914219 1099.8870707658145,214.87365513230594 1153,208 C 1206.1129292341855,201.12634486769406 1251.460836924053,183.46466996219831 1298,172 C 1344.539163075947,160.53533003780169 1392.2695815379734,155.26766501890086 1440,150";

  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none select-none relative z-20 my-[-3px] ${className}`}
      style={{
        transform: flip ? "scaleX(-1)" : "none",
        opacity
      }}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-16 sm:h-20 md:h-24 block transition duration-300 ease-in-out"
      >
        <defs>
          {/* Translucent cyber gradient fill harmonized with portfolio dark theme */}
          <linearGradient id={fillGradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.14" />
            <stop offset="45%" stopColor="#06b6d4" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#0a0f1d" stopOpacity="0.35" />
          </linearGradient>

          {/* Luminous Neon crest stroke gradient */}
          <linearGradient id={strokeGradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(20, 184, 166, 0.25)" />
            <stop offset="25%" stopColor="rgba(45, 212, 191, 0.85)" />
            <stop offset="60%" stopColor="rgba(56, 189, 248, 0.85)" />
            <stop offset="100%" stopColor="rgba(20, 184, 166, 0.3)" />
          </linearGradient>
        </defs>

        {/* Wave body with translucent cyber gradient allowing bubbles to shine through */}
        <path
          d={wavePath}
          fill={`url(#${fillGradId})`}
          className="transition-all duration-300 ease-in-out"
        />

        {/* Luminous glowing crest outline along the top edge of the wave */}
        <path
          d={crestLine}
          fill="none"
          stroke={`url(#${strokeGradId})`}
          strokeWidth="2.5"
          strokeLinecap="round"
          className="drop-shadow-[0_0_8px_rgba(20,184,166,0.5)]"
        />
      </svg>
    </div>
  );
}
