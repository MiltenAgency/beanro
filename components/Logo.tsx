import React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

export function TreeIcon({
  size = 32,
  color = "currentColor",
  className = "",
  ...props
}: LogoProps) {
  return (
    <svg
      viewBox="0 0 160 180"
      width={size}
      height={size * 1.125}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g fill={color}>
        {/* Roots and Trunk */}
        <path d="M74 122 C74 135 71 145 61 153 C70 150 74 145 76 138 C76 130 73 118 69 110 C62 101 48 99 43 95 C37 90 39 82 48 83 C60 83 70 92 73 103 C76 109 77 116 78 122 C79 114 81 106 84 98 C88 84 99 75 108 70 C107 77 103 86 96 92 C89 98 84 106 83 117 C83 126 85 137 85 144 C86 151 90 156 99 161 C88 158 82 152 82 147 C82 136 84 128 84 122 Z" />
        {/* Left 'S' Branch Flowing Up */}
        <path d="M43 94 C34 94 37 84 46 83 C55 82 66 89 71 98 C72 101 73 104 74 107 C72 101 69 94 62 89 C55 84 46 83 43 94 Z" />
        {/* Center Vertical Branch */}
        <path d="M78 108 C78 90 77 75 82 64 C84 74 83 91 82 108 Z" />
        {/* Top-Left Leaf */}
        <path d="M41 55 C41 55 49 53 58 60 C66 67 65 74 62 74 C58 74 48 68 44 62 C41 59 41 55 41 55 Z" />
        {/* Bottom-Left Leaf */}
        <path d="M40 92 C40 92 48 91 58 97 C67 103 66 110 63 110 C59 110 48 104 43 98 C40 95 40 92 40 92 Z" />
        {/* Center-Top Leaf */}
        <path d="M80 34 C80 34 89 39 91 53 C93 64 85 71 81 70 C78 69 73 59 74 48 C75 39 80 34 80 34 Z" />
        {/* Top-Right Leaf */}
        <path d="M101 56 C101 56 109 64 107 77 C105 87 97 91 93 88 C90 85 91 74 96 66 C100 59 101 56 101 56 Z" />
        {/* Bottom-Right Leaf */}
        <path d="M102 96 C102 96 111 103 109 116 C107 125 99 128 95 125 C92 122 93 112 98 105 C101 99 102 96 102 96 Z" />
      </g>
    </svg>
  );
}

export function KomorebiLogo({
  treeColor = "#1B382B",
  textColor = "#1B382B",
  accentColor = "#38A169",
  className = "",
}: {
  treeColor?: string;
  textColor?: string;
  accentColor?: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <TreeIcon size={34} color={treeColor} />
      <div className="flex flex-col">
        <span
          style={{ color: textColor }}
          className="font-display text-[22px] font-bold leading-none tracking-[0.04em]"
        >
          KOMOREBI
        </span>
        <div className="mt-0.5 flex items-center gap-1.5">
          <span
            style={{ color: accentColor }}
            className="font-body text-[8px] font-bold tracking-[0.22em] uppercase"
          >
            TEAHOUSE
          </span>
          <span style={{ color: textColor }} className="text-[8px] opacity-75 font-medium">
            木漏れ日
          </span>
        </div>
      </div>
    </div>
  );
}

