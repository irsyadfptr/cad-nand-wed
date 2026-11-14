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
            <div style={{ position: 'absolute', top: 80, fontFamily: serif, fontStyle: 'italic', fontSize: 38, color: '#5e5468' }}>A romantic comedy</div>
            <div
                style={{
                    position: 'absolute',
                    top: 130,
                    left: 40,
                    right: 40,
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: display,
                    fontWeight: 900,
                    fontSize: 300,
                    lineHeight: 0.8,
                    color: INK,
                    transform: `scale(${0.9 + pop * 0.1})`,
                    opacity: pop,
                }}
            >
                <span>NAND</span>
                <span>CAD</span>
            </div>
            <Img src={staticFile('cutouts/laugh.webp')} style={{ position: 'absolute', bottom: 0, height: 560, transform: `translateY(${(1 - rise) * 400}px)` }} />
        </AbsoluteFill>
    );
}

function Ticket({ len }) {
    const f = useCurrentFrame();
    const { fps } = useVideoConfig();
    const o = useFade(len, 10);
    const slide = spring({ frame: f, fps, config: { damping: 16 } });
    return (
        <AbsoluteFill style={{ background: INK, alignItems: 'center', justifyContent: 'center', opacity: o }}>
            <div
                style={{
                    width: 900,
                    display: 'flex',
                    background: STOCK,
                    borderRadius: 8,
                    transform: `translateY(${(1 - slide) * -500}px)`,
                    clipPath: `inset(0 0 ${(1 - slide) * 100}% 0)`,
                }}
            >
                <div style={{ flex: 1, padding: '44px 52px' }}>
                    <div style={{ fontFamily: display, fontWeight: 900, fontSize: 26, letterSpacing: '0.22em', color: RED }}>ADMIT TWO</div>
                    <div style={{ fontFamily: display, fontWeight: 900, fontSize: 92, lineHeight: 0.9, color: INK, marginTop: 8 }}>YEAR THREE</div>
                    <div style={{ fontFamily: serif, fontStyle: 'italic', fontSize: 34, color: '#6b4c5a', marginTop: 14 }}>Now showing</div>
                </div>
                <div style={{ width: 250, borderLeft: '4px dashed rgba(43,22,34,0.35)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ fontFamily: display, fontWeight: 900, fontSize: 96, color: RED, lineHeight: 0.9 }}>25.12</div>
                    <div style={{ fontFamily: display, fontWeight: 700, fontSize: 36, color: INK }}>2026</div>
                </div>
            </div>
        </AbsoluteFill>
    );
}

// The running order: [component, length in frames, props]. 30 fps.
const CUTS = [
    [Card, 75, { text: 'This December', sub: 'from the people who brought you one wedding' }],
    [Shot, 80, { src: 'photos/graduation.jpg', scene: 'Scene 01', caption: 'He brought snacks', origin: '45% 60%' }],
    [Shot, 80, { src: 'photos/kitchen.jpg', scene: 'Scene 03', caption: 'She brought the smile', origin: '55% 50%' }],
    [Card, 55, { text: 'Nobody brought a plan', bg: STOCK, color: INK }],
    [Cutout, 85, { src: 'cutouts/stairs.webp', scene: 'Scene 02', caption: 'The grand gesture' }],
    [Cutout, 85, { src: 'cutouts/walk.webp', scene: 'Scene 04', caption: 'The big day' }],
    [Shot, 70, { src: 'photos/toss.jpg', scene: 'Scene 05', caption: 'The dance number' }],
    [Shot, 70, { src: 'photos/goat.jpg', scene: 'Scene 06', caption: 'The comic relief', origin: '60% 70%' }],
    [Shot, 70, { src: 'photos/arcade.jpg', scene: 'Scene 08', caption: 'The plot twist', origin: '50% 30%' }],
    [Shot, 85, { src: 'photos/holdhands.jpg', scene: 'Scene 09', caption: 'The quiet bit', origin: '45% 70%' }],
    [TitleCard, 110, {}],
    [Ticket, 95, {}],
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
            {/* letterbox bars */}
            <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 40, background: '#000' }} />
            <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 40, background: '#000' }} />
            {/* film grain flicker */}
            <AbsoluteFill style={{ background: '#fff', opacity: (Math.sin(f * 12.9898) * 43758.5453) % 1 > 0.92 ? 0.025 : 0, pointerEvents: 'none' }} />
        </AbsoluteFill>
    );
}
