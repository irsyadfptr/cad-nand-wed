// Hand-drawn ornaments. Two cats (one ink, one ticket-red) stand in for the two of us.
// All are decorative: aria-hidden, colors come from CSS tokens.

export function PeekingCat({ tone = 'ink', className = '' }) {
    return (
        <svg className={`orn cat cat-${tone} ${className}`} viewBox="0 0 120 74" aria-hidden="true">
            <polygon className="cat-fur" points="28,34 30,2 54,22" />
            <polygon className="cat-fur" points="66,22 90,2 92,34" />
            <polygon className="cat-ear" points="33,26 34,12 46,22" />
            <polygon className="cat-ear" points="74,22 86,12 87,26" />
            <ellipse className="cat-fur" cx="60" cy="46" rx="35" ry="28" />
            <ellipse className="cat-eye" cx="46" cy="42" rx="6" ry="7" />
            <ellipse className="cat-eye" cx="74" cy="42" rx="6" ry="7" />
            <ellipse className="cat-pupil" cx="46" cy="43" rx="2" ry="5" />
            <ellipse className="cat-pupil" cx="74" cy="43" rx="2" ry="5" />
            <path className="cat-nose" d="M56 53 h8 l-4 4 z" />
            <path className="cat-line" d="M60 57 q-4 5 -9 2 M60 57 q4 5 9 2 M18 50 l20 2 M18 58 l20 -2 M102 50 l-20 2 M102 58 l-20 -2" />
            <ellipse className="cat-fur" cx="36" cy="70" rx="12" ry="7" />
            <ellipse className="cat-fur" cx="84" cy="70" rx="12" ry="7" />
        </svg>
    );
}

export function SittingCat({ tone = 'ink', className = '', flip = false }) {
    return (
        <svg className={`orn cat cat-${tone} ${className}`} viewBox="0 0 100 120" aria-hidden="true" style={flip ? { transform: 'scaleX(-1)' } : undefined}>
            <path className="cat-tail" d="M30 112 C 6 114 2 90 16 82" />
            <path className="cat-fur" d="M30 116 C 16 116 14 94 22 76 C 28 62 40 54 52 54 C 66 54 75 66 77 82 C 79 100 74 116 60 116 Z" />
            <polygon className="cat-fur" points="42,30 44,6 58,22" />
            <polygon className="cat-fur" points="62,20 76,4 78,30" />
            <circle className="cat-fur" cx="60" cy="38" r="21" />
            <ellipse className="cat-eye" cx="53" cy="37" rx="3.5" ry="4.5" />
            <ellipse className="cat-eye" cx="69" cy="37" rx="3.5" ry="4.5" />
            <path className="cat-nose" d="M59 45 h5 l-2.5 3 z" />
            <ellipse className="cat-fur" cx="48" cy="114" rx="9" ry="5" />
            <ellipse className="cat-fur" cx="64" cy="114" rx="9" ry="5" />
        </svg>
    );
}

export function SleepingCat({ tone = 'ink', className = '' }) {
    return (
        <svg className={`orn cat cat-${tone} ${className}`} viewBox="0 0 130 70" aria-hidden="true">
            <ellipse className="cat-fur" cx="70" cy="46" rx="48" ry="22" />
            <polygon className="cat-fur" points="20,34 18,12 34,26" />
            <polygon className="cat-fur" points="36,26 46,8 50,30" />
            <circle className="cat-fur" cx="34" cy="44" r="18" />
            <path className="cat-closed" d="M24 44 q4 4 8 0 M38 44 q4 4 8 0" />
            <path className="cat-tail" d="M116 50 C 120 70 60 72 40 64" />
            <text className="cat-z" x="56" y="16">z</text>
            <text className="cat-z" x="66" y="8" style={{ fontSize: '9px' }}>z</text>
        </svg>
    );
}

export function Rosette({ className = '' }) {
    // Scalloped badge with ribbon tails: the anniversary seal.
    const points = Array.from({ length: 40 }, (_, i) => {
        const r = i % 2 ? 46 : 50;
        const a = (i / 40) * Math.PI * 2;
        return `${60 + r * Math.cos(a)},${56 + r * Math.sin(a)}`;
    }).join(' ');
    return (
        <svg className={`orn rosette ${className}`} viewBox="0 0 120 150" aria-hidden="true">
            <path className="ros-tail" d="M38 92 L26 146 L40 136 L50 148 L58 98 Z" />
            <path className="ros-tail" d="M82 92 L94 146 L80 136 L70 148 L62 98 Z" />
            <polygon className="ros-edge" points={points} />
            <circle className="ros-face" cx="60" cy="56" r="38" />
            <defs>
                <path id="ros-arc" d="M28 56 a32 32 0 1 1 64 0" />
            </defs>
            <text className="ros-arc">
                <textPath href="#ros-arc" startOffset="50%" textAnchor="middle">
                    Three years
                </textPath>
            </text>
            <text className="ros-num" x="60" y="80" textAnchor="middle">
                3
            </text>
        </svg>
    );
}

export function Sparkle({ className = '', style, ...rest }) {
    return (
        <svg className={`orn sparkle ${className}`} viewBox="0 0 24 24" aria-hidden="true" style={style} {...rest}>
            <path d="M12 0 C13 8 16 11 24 12 C16 13 13 16 12 24 C11 16 8 13 0 12 C8 11 11 8 12 0Z" />
        </svg>
    );
}

export function Paw({ className = '', style }) {
    return (
        <svg className={`orn paw ${className}`} viewBox="0 0 40 40" aria-hidden="true" style={style}>
            <ellipse cx="20" cy="27" rx="10" ry="8" />
            <ellipse cx="8" cy="16" rx="4" ry="5" />
            <ellipse cx="16" cy="9" rx="4" ry="5" />
            <ellipse cx="25" cy="9" rx="4" ry="5" />
            <ellipse cx="32" cy="16" rx="4" ry="5" />
        </svg>
    );
}

export function PawTrail({ className = '' }) {
    // A cat walked across the page between sections.
    const steps = [0, 1, 2, 3, 4, 5, 6];
    return (
        <div className={`paw-trail ${className}`} aria-hidden="true">
            {steps.map((i) => (
                <Paw key={i} style={{ left: `${8 + i * 13}%`, top: `${i % 2 ? 10 : 46}px`, transform: 'rotate(80deg)' }} />
            ))}
        </div>
    );
}

export function MiniTicket({ className = '', label = 'Admit 2', style }) {
    return (
        <span className={`orn mini-ticket ${className}`} aria-hidden="true" style={style}>
            {label}
        </span>
    );
}
