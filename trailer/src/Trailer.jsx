import { AbsoluteFill, Audio, Img, Sequence, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig, Easing, delayRender, continueRender } from 'remotion';

// Fonts are served from public/fonts so rendering needs no network.
const display = 'Big Shoulders Display';
const serif = 'Newsreader';
const fontsReady = delayRender('Loading fonts');
Promise.all([
    new FontFace(display, `url(${staticFile('fonts/BigShouldersDisplay.woff2')})`, { weight: '100 900' }).load(),
    new FontFace(serif, `url(${staticFile('fonts/Newsreader-400-italic.woff2')})`, { style: 'italic', weight: '400' }).load(),
]).then((faces) => {
    faces.forEach((f) => document.fonts.add(f));
    continueRender(fontsReady);
});

const INK = '#241a2c';
const STOCK = '#f9dde2';
const RED = '#c8283f';
const PAPER = '#f3f1f6';

function Cat({ color = INK, flip = false, size = 120, style }) {
    return (
        <svg viewBox="0 0 100 120" width={size} style={{ transform: flip ? 'scaleX(-1)' : undefined, ...style }}>
            <path d="M30 112 C 6 114 2 90 16 82" fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" />
            <path d="M30 116 C 16 116 14 94 22 76 C 28 62 40 54 52 54 C 66 54 75 66 77 82 C 79 100 74 116 60 116 Z" fill={color} />
            <polygon points="42,30 44,6 58,22" fill={color} />
            <polygon points="62,20 76,4 78,30" fill={color} />
            <circle cx="60" cy="38" r="21" fill={color} />
            <ellipse cx="53" cy="37" rx="3.5" ry="4.5" fill="#d8d35a" />
            <ellipse cx="69" cy="37" rx="3.5" ry="4.5" fill="#d8d35a" />
            <path d="M59 45 h5 l-2.5 3 z" fill="#f2a3b0" />
        </svg>
    );
}

// Fade a clip in and out over its own length.
function useFade(len, edge = 12) {
    const f = useCurrentFrame();
    return interpolate(f, [0, edge, len - edge, len], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
}

function Card({ len, text, sub, bg = INK, color = PAPER }) {
    const f = useCurrentFrame();
    const o = useFade(len);
    const y = interpolate(f, [0, 20], [24, 0], { extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic) });
    return (
        <AbsoluteFill style={{ background: bg, alignItems: 'center', justifyContent: 'center', opacity: o }}>
            <div style={{ transform: `translateY(${y}px)`, textAlign: 'center' }}>
                <div style={{ fontFamily: display, fontWeight: 900, fontSize: 120, lineHeight: 0.9, color, textTransform: 'uppercase' }}>{text}</div>
                {sub && <div style={{ fontFamily: serif, fontStyle: 'italic', fontSize: 40, color, opacity: 0.75, marginTop: 24 }}>{sub}</div>}
            </div>
        </AbsoluteFill>
    );
}

// A photo with a slow push-in and a caption in the lower third.
function Shot({ len, src, caption, scene, from = 1.04, to = 1.16, origin = '50% 40%' }) {
    const f = useCurrentFrame();
    const o = useFade(len);
    const s = interpolate(f, [0, len], [from, to]);
    const cy = interpolate(f, [6, 26], [30, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic) });
    const co = interpolate(f, [6, 26], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
    return (
        <AbsoluteFill style={{ background: '#000', opacity: o }}>
            <Img src={staticFile(src)} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${s})`, transformOrigin: origin }} />
            <AbsoluteFill style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(18,12,23,0.85) 100%)' }} />
            <div style={{ position: 'absolute', left: 90, bottom: 110, opacity: co, transform: `translateY(${cy}px)` }}>
                {scene && <div style={{ fontFamily: display, fontWeight: 700, fontSize: 30, color: '#ff6b80' }}>{scene}</div>}
                <div style={{ fontFamily: display, fontWeight: 900, fontSize: 84, lineHeight: 0.95, color: PAPER, textTransform: 'uppercase' }}>{caption}</div>
            </div>
        </AbsoluteFill>
    );
}

// A cut-out on ticket pink, bouncing up into frame.
function Cutout({ len, src, caption, scene }) {
    const f = useCurrentFrame();
    const { fps } = useVideoConfig();
    const o = useFade(len);
    const up = spring({ frame: f, fps, config: { damping: 14, mass: 0.8 } });
    return (
        <AbsoluteFill style={{ background: STOCK, opacity: o }}>
            <div style={{ position: 'absolute', left: 90, top: 150, width: 520 }}>
                <div style={{ fontFamily: display, fontWeight: 700, fontSize: 30, color: RED }}>{scene}</div>
                <div style={{ fontFamily: display, fontWeight: 900, fontSize: 110, lineHeight: 0.9, color: INK, textTransform: 'uppercase' }}>{caption}</div>
            </div>
            <Img
                src={staticFile(src)}
                style={{ position: 'absolute', right: 80, bottom: 0, height: 640, transform: `translateY(${(1 - up) * 300}px)`, filter: 'drop-shadow(0 20px 26px rgba(43,22,34,0.35))' }}
            />
        </AbsoluteFill>
    );
}

function TitleCard({ len }) {
    const f = useCurrentFrame();
    const { fps } = useVideoConfig();
    const o = useFade(len, 10);
    const pop = spring({ frame: f - 8, fps, config: { damping: 12 } });
    const rise = spring({ frame: f, fps, config: { damping: 18 } });
    return (
        <AbsoluteFill style={{ background: PAPER, opacity: o, alignItems: 'center' }}>
            <div style={{ position: 'absolute', top: 80, fontFamily: serif, fontStyle: 'italic', fontSize: 38, color: '#5e5468' }}>Three years of</div>
            <div
                style={{
                    position: 'absolute',
                    top: 190,
                    left: 40,
                    right: 40,
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: display,
                    fontWeight: 900,
                    fontSize: 260,
                    lineHeight: 0.8,
                    color: INK,
                    transform: `scale(${0.9 + pop * 0.1})`,
                    opacity: pop,
                }}
            >
                <span style={{ position: 'relative' }}>
                    NAND
                    <span style={{ position: 'absolute', left: 10, bottom: '100%' }}><Cat color={RED} size={90} /></span>
                </span>
                <span style={{ position: 'relative' }}>
                    CAD
                    <span style={{ position: 'absolute', right: 10, bottom: '100%' }}><Cat color={INK} size={90} flip /></span>
                </span>
            </div>
            <Img src={staticFile('cutouts/laugh.webp')} style={{ position: 'absolute', bottom: 0, height: 560, transform: `translateY(${(1 - rise) * 400}px)` }} />
        </AbsoluteFill>
    );
}

function Anniversary({ len }) {
    const f = useCurrentFrame();
    const { fps } = useVideoConfig();
    const o = useFade(len, 10);
    const pop = spring({ frame: f, fps, config: { damping: 12 } });
    const catL = spring({ frame: f - 12, fps, config: { damping: 10 } });
    const catR = spring({ frame: f - 20, fps, config: { damping: 10 } });
    const beat = 1 + Math.max(0, Math.sin(f / 5)) * 0.18;
    return (
        <AbsoluteFill style={{ background: STOCK, opacity: o, alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontFamily: display, fontWeight: 700, fontSize: 34, color: RED, letterSpacing: '0.06em' }}>25 DECEMBER 2026</div>
            <div style={{ fontFamily: display, fontWeight: 900, fontSize: 150, lineHeight: 0.85, color: INK, textAlign: 'center', transform: `scale(${0.85 + pop * 0.15})`, opacity: pop }}>
                HAPPY 3RD
                <br />
                ANNIVERSARY, <span style={{ color: RED }}>NAND</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, marginTop: 30 }}>
                <Cat color={RED} size={110} style={{ transform: `translateY(${(1 - catL) * 200}px)` }} />
                <svg viewBox="0 0 24 22" width={40} style={{ transform: `scale(${beat})`, marginBottom: 60 }}>
                    <path d="M12 21 C 4 14 0 10 0 6 A6 6 0 0 1 12 4 A6 6 0 0 1 24 6 C24 10 20 14 12 21Z" fill={RED} />
                </svg>
                <div style={{ transform: `translateY(${(1 - catR) * 200}px)` }}>
                    <Cat color={INK} size={110} flip />
                </div>
            </div>
            <div style={{ fontFamily: serif, fontStyle: 'italic', fontSize: 36, color: INK, marginTop: 20 }}>Love, Cad</div>
        </AbsoluteFill>
    );
}

// The running order: [component, length in frames, props]. 30 fps.
const CUTS = [
    [Card, 80, { text: 'Three years ago', sub: 'on 25 December 2023' }],
    [Shot, 85, { src: 'photos/walk.jpg', caption: 'Nand married Cad', origin: '50% 45%' }],
    [Shot, 70, { src: 'photos/hug.jpg', caption: 'Everybody cried', origin: '50% 40%' }],
    [Shot, 70, { src: 'photos/toss.jpg', caption: 'Everybody danced' }],
    [Card, 55, { text: 'And then came', sub: 'the good stuff', bg: STOCK, color: INK }],
    [Shot, 65, { src: 'photos/kitchen.jpg', caption: 'Coffee dates', origin: '55% 50%' }],
    [Shot, 65, { src: 'photos/goat.jpg', caption: 'Comedy nights', origin: '60% 70%' }],
    [Shot, 65, { src: 'photos/arcade.jpg', caption: 'Arcade jackpots', origin: '50% 30%' }],
    [Shot, 65, { src: 'photos/onepiece.jpg', caption: 'Wedding crashing', origin: '50% 50%' }],
    [Cutout, 85, { src: 'cutouts/stairs.webp', caption: 'Too many flowers' }],
    [Shot, 80, { src: 'photos/holdhands.jpg', caption: 'And quiet days', origin: '45% 70%' }],
    [TitleCard, 105, {}],
    [Anniversary, 140, {}],
];
const OVERLAP = 10;
export const TRAILER_FRAMES = CUTS.reduce((t, [, len]) => t + len - OVERLAP, OVERLAP);

export function Trailer() {
    const f = useCurrentFrame();
    let at = 0;
    const music = (frame) => interpolate(frame, [0, 30, TRAILER_FRAMES - 45, TRAILER_FRAMES], [0, 0.8, 0.8, 0], { extrapolateRight: 'clamp' });
    return (
        <AbsoluteFill style={{ background: '#000' }}>
            <Audio src={staticFile('bg-music.mp3')} volume={music} />
            {CUTS.map(([C, len, props], i) => {
                const from = at;
                at += len - OVERLAP;
                return (
                    <Sequence key={i} from={from} durationInFrames={len}>
                        <C len={len} {...props} />
                    </Sequence>
                );
            })}
        </AbsoluteFill>
    );
}
