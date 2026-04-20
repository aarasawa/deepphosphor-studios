import React from 'react';

interface LogoProps {
  variant?: 'mark-a' | 'mark-b' | 'mark-c' | 'horizontal' | 'horizontal-compact' | 'stacked' | 'stacked-compact';
  className?: string;
  size?: number;
}

const FishMark = ({ opacity = 1, showGlow = true, showStalk = true }) => (
  <g>
    <rect x="0"  y="4"  width="3" height="3" fill="#FFB347" opacity={0.38 * opacity}/>
    <rect x="0"  y="9"  width="3" height="3" fill="#FFB347" opacity={0.38 * opacity}/>
    <rect x="3"  y="2"  width="4" height="4" fill="#FFB347" opacity={0.55 * opacity}/>
    <rect x="7"  y="1"  width="4" height="4" fill="#FFB347" opacity={0.75 * opacity}/>
    <rect x="11" y="0"  width="4" height="4" fill="#FFB347" opacity={0.9 * opacity}/>
    <rect x="15" y="0"  width="4" height="4" fill="#FFB347" opacity={opacity}/>
    <rect x="19" y="1"  width="4" height="4" fill="#FFB347" opacity={0.75 * opacity}/>
    <rect x="3"  y="6"  width="4" height="4" fill="#FFB347" opacity={0.65 * opacity}/>
    <rect x="7"  y="5"  width="4" height="4" fill="#FFB347" opacity={0.88 * opacity}/>
    <rect x="11" y="4"  width="4" height="4" fill="#FFB347" opacity={opacity}/>
    <rect x="15" y="4"  width="4" height="4" fill="#FFB347" opacity={opacity}/>
    <rect x="19" y="5"  width="4" height="4" fill="#FFB347" opacity={opacity}/>
    <rect x="23" y="4"  width="4" height="4" fill="#FFB347" opacity={0.62 * opacity}/>
    <rect x="7"  y="9"  width="4" height="4" fill="#FFB347" opacity={0.78 * opacity}/>
    <rect x="11" y="8"  width="4" height="4" fill="#FFB347" opacity={opacity}/>
    <rect x="15" y="8"  width="4" height="4" fill="#FFB347" opacity={opacity}/>
    <rect x="19" y="9"  width="4" height="4" fill="#FFB347" opacity={0.72 * opacity}/>
    <rect x="21" y="4"  width="3" height="3" fill="#060d18"/>
    <rect x="22" y="5"  width="1.5" height="1.5" fill="#FFD580"/>
    <rect x="11" y="12" width="4" height="3" fill="#FFB347" opacity={0.65 * opacity}/>
    <rect x="15" y="12" width="4" height="3" fill="#FFB347" opacity={0.55 * opacity}/>
    <rect x="19" y="12" width="4" height="3" fill="#FFB347" opacity={0.45 * opacity}/>
    <rect x="12" y="15" width="11" height="2" fill="#060d18"/>
    <rect x="13" y="15" width="2"  height="2" fill="#FFD580"/>
    <rect x="18" y="15" width="2"  height="2" fill="#FFD580"/>
    {showStalk && <rect x="16" y="-2" width="2"  height="3" fill="#FFB347" opacity={0.75 * opacity}/>}
    {showGlow && (
      <g>
        <circle cx="15" cy="-5" r="5"   fill="#FFD580" opacity={0.14 * opacity}/>
        <circle cx="15" cy="-5" r="3"   fill="#FFD580" opacity={0.46 * opacity}/>
        <circle cx="15" cy="-5" r="1.5" fill="#FFD580" opacity={opacity}/>
      </g>
    )}
  </g>
);

const SimplifiedFishMark = ({ opacity = 1 }) => (
  <g>
    <rect x="0"  y="5"  width="3"  height="3"  fill="#FFB347" opacity={0.4 * opacity}/>
    <rect x="0"  y="10" width="3"  height="3"  fill="#FFB347" opacity={0.4 * opacity}/>
    <rect x="3"  y="2"  width="20" height="5"  fill="#FFB347" opacity={0.88 * opacity}/>
    <rect x="3"  y="7"  width="24" height="5"  fill="#FFB347" opacity={opacity}/>
    <rect x="7"  y="12" width="16" height="4"  fill="#FFB347" opacity={0.7 * opacity}/>
    <rect x="21" y="3"  width="3"  height="3"  fill="#060d18"/>
    <rect x="22" y="4"  width="1.5" height="1.5" fill="#FFD580"/>
    <rect x="8"  y="16" width="14" height="2"  fill="#060d18"/>
    <rect x="9"  y="16" width="3"  height="2"  fill="#FFD580"/>
    <rect x="15" y="16" width="3"  height="2"  fill="#FFD580"/>
    <rect x="15" y="-1" width="2"  height="3"  fill="#FFB347" opacity={0.8 * opacity}/>
    <circle cx="14" cy="-4" r="4.5" fill="#FFD580" opacity={0.15 * opacity}/>
    <circle cx="14" cy="-4" r="2.8" fill="#FFD580" opacity={0.5 * opacity}/>
    <circle cx="14" cy="-4" r="1.4" fill="#FFD580" opacity={opacity}/>
  </g>
);

export default function Logo({ variant = 'mark-a', className = '', size }: LogoProps) {
  switch (variant) {
    case 'mark-a':
      return (
        <svg width={size || 100} height={size ? size * 0.78 : 78} viewBox="-2 -6 32 26" overflow="visible" className={className}>
          <FishMark />
        </svg>
      );
    case 'mark-b':
      return (
        <svg width={size || 100} height={size ? size * 0.78 : 78} viewBox="-2 -2 32 24" overflow="visible" className={className}>
          <FishMark showGlow={false} />
        </svg>
      );
    case 'mark-c':
      return (
        <svg width={size || 100} height={size ? size * 0.78 : 78} viewBox="-2 -6 32 26" overflow="visible" className={className}>
          <SimplifiedFishMark />
        </svg>
      );
    case 'horizontal':
      return (
        <svg width={size || 500} height={size ? size * 0.096 : 48} viewBox="0 0 500 48" overflow="visible" className={className}>
          <g transform="translate(0,10) scale(1.6)">
            <FishMark />
          </g>
          <line x1="56" y1="6" x2="56" y2="42" stroke="#FFB347" strokeWidth="0.7" opacity="0.22"/>
          <text x="70" y="22" fill="#FFD580" fontFamily="'Share Tech Mono', monospace" fontSize="15" letterSpacing="4">DEEP PHOSPHOR</text>
          <text x="70" y="40" fill="#C47A20" fontFamily="'Share Tech Mono', monospace" fontSize="15" letterSpacing="6">STUDIOS</text>
        </svg>
      );
    case 'horizontal-compact':
      return (
        <svg width={size || 360} height={size ? size * 0.088 : 32} viewBox="0 0 360 32" overflow="visible" className={className}>
          <g transform="translate(0,4) scale(1.1)">
            <FishMark showGlow={true} showStalk={true} />
          </g>
          <line x1="38" y1="3" x2="38" y2="29" stroke="#FFB347" strokeWidth="0.6" opacity="0.2"/>
          <text x="50" y="14" fill="#FFD580" fontFamily="'Share Tech Mono', monospace" fontSize="11" letterSpacing="3">DEEP PHOSPHOR</text>
          <text x="50" y="27" fill="#C47A20" fontFamily="'Share Tech Mono', monospace" fontSize="11" letterSpacing="4">STUDIOS</text>
        </svg>
      );
    case 'stacked':
      return (
        <svg width={size || 200} height={size ? size * 0.825 : 165} viewBox="0 0 200 165" overflow="visible" className={className}>
          <g transform="translate(82,14) scale(1.5)">
            <FishMark />
          </g>
          <line x1="28" y1="58" x2="172" y2="58" stroke="#FFB347" strokeWidth="0.5" opacity="0.18"/>
          <text x="100" y="77"  textAnchor="middle" fill="#FFD580" fontFamily="'Share Tech Mono', monospace" fontSize="14" letterSpacing="5">DEEP</text>
          <text x="100" y="95"  textAnchor="middle" fill="#FFD580" fontFamily="'Share Tech Mono', monospace" fontSize="14" letterSpacing="5">PHOSPHOR</text>
          <text x="100" y="113" textAnchor="middle" fill="#FFB347" fontFamily="'Share Tech Mono', monospace" fontSize="14" letterSpacing="5">STUDIOS</text>
        </svg>
      );
    case 'stacked-compact':
      return (
        <svg width={size || 165} height={size ? size * 0.715 : 118} viewBox="0 0 165 118" overflow="visible" className={className}>
          <g transform="translate(54,8) scale(1.3)">
            <FishMark />
          </g>
          <line x1="18" y1="50" x2="147" y2="50" stroke="#FFB347" strokeWidth="0.5" opacity="0.16"/>
          <text x="82" y="67"  textAnchor="middle" fill="#FFD580" fontFamily="'Share Tech Mono', monospace" fontSize="12" letterSpacing="4">DEEP PHOSPHOR</text>
          <text x="82" y="84"  textAnchor="middle" fill="#FFB347" fontFamily="'Share Tech Mono', monospace" fontSize="12" letterSpacing="5">STUDIOS</text>
        </svg>
      );
    default:
      return null;
  }
}
